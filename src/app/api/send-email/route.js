import nodemailer from 'nodemailer'
import { google } from 'googleapis'

export async function POST (request) {
  const { to, date, slot, therapistName, therapistEmail, orderId } =
    await request.json()

  const {
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REFRESH_TOKEN,
    EMAIL_USER,
    EMAIL_PASS
  } = process.env

  // Configure OAuth2 Client
  const oAuth2Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground' // Redirect URI
  )
  oAuth2Client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN })

  try {
    // Authenticate Google Calendar API
    const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })

    // Parse the slot and date into start and end times
    const [time, period] = slot.split(' ')
    const [startHourStr, startMinute] = time.split(':')
    let startHour = parseInt(startHourStr, 10)
    if (period === 'PM' && startHour !== 12) startHour += 12
    if (period === 'AM' && startHour === 12) startHour = 0

    const startDateTime = new Date(date)
    startDateTime.setHours(startHour, startMinute, 0)
    const endDateTime = new Date(startDateTime)
    endDateTime.setHours(endDateTime.getHours() + 1)

    const event = {
      summary: `Session with ${therapistName}`,
      description: `Session scheduled via Better Together Wellness`,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: 'Asia/Kolkata' // Adjust as per your timezone
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'Asia/Kolkata'
      },
      attendees: [{ email: to }, { email: therapistEmail }],
      conferenceData: {
        createRequest: {
          requestId: orderId,
          conferenceSolutionKey: { type: 'hangoutsMeet' }
        }
      }
    }

    // Insert event with GMeet link
    const response = calendar.events.insert({
      calendarId: 'primary',
      resource: event,
      conferenceDataVersion: 1,
      sendUpdates: 'all' // Notify attendees
    })
    // const meetingLink = await response.data.hangoutLink

    // Create an iCal string for the calendar invite
    const iCalEvent = `
BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:Session with ${therapistName}
DESCRIPTION:Session scheduled via Better Together Wellness\nMeeting Link: 
DTSTART:${startDateTime.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTEND:${endDateTime.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
STATUS:CONFIRMED
ORGANIZER;CN=Better Together Wellness:MAILTO:${EMAIL_USER}
ATTENDEE;CN=Customer;RSVP=TRUE:MAILTO:${to}
ATTENDEE;CN=${therapistName};RSVP=TRUE:MAILTO:${therapistEmail}
END:VEVENT
END:VCALENDAR
    `.trim()

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
      }
    })

    // Send the email to the user
    const userEmailContent = {
      from: EMAIL_USER,
      to,
      subject: '[TESTING] Your Booking Confirmation with Calendar Invite',
      text: `Dear Customer,

Thank you for booking your session with Better Together Wellness.

Here are your session details:
- Therapist: ${therapistName}
- Date: ${date}
- Time Slot: ${slot}
- Booking ID: ${orderId}


A calendar invite is attached to help you save the session in your calendar.

Best regards,
Better Together Wellness Team`,
      html: `
        <p>Dear Customer,</p>
        <p>Thank you for booking your session with <strong>Better Together Wellness</strong>.</p>
        <p>
          <strong>Therapist:</strong> ${therapistName}<br>
          <strong>Date:</strong> ${date}<br>
          <strong>Time Slot:</strong> ${slot}<br>
          <strong>Booking ID:</strong> ${orderId}<br>
        </p>
        <p>A calendar invite is attached to help you save the session in your calendar.</p>
        <p>Best regards,<br>Better Together Wellness Team</p>
      `,
      icalEvent: {
        content: iCalEvent,
        method: 'REQUEST'
      }
    }

    // Send the email to the therapist
    const therapistEmailContent = {
      from: EMAIL_USER,
      to: therapistEmail,
      subject: '[TESTING] New Session Booking Alert with Calendar Invite',
      text: `Dear ${therapistName},

A new session has been booked with you.

Here are the session details:
- Date: ${date}
- Time Slot: ${slot}
- Booking ID: ${orderId}

A calendar invite is attached to help you save the session in your calendar.

Best regards,
Better Together Wellness Team`,
      html: `
        <p>Dear ${therapistName},</p>
        <p>A new session has been booked with you.</p>
        <p>
          <strong>Date:</strong> ${date}<br>
          <strong>Time Slot:</strong> ${slot}<br>
          <strong>Booking ID:</strong> ${orderId}<br>
        </p>
        <p>A calendar invite is attached to help you save the session in your calendar.</p>
        <p>Best regards,<br>Better Together Wellness Team</p>
      `,
      icalEvent: {
        content: iCalEvent,
        method: 'REQUEST'
      }
    }

    // Send both emails
    await transporter.sendMail(userEmailContent)
    await transporter.sendMail(therapistEmailContent)

    return new Response(JSON.stringify({ success: true}), {
      status: 200
    })
  } catch (error) {
    console.error('Error:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500
    })
  }
}
