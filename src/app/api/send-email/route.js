import nodemailer from 'nodemailer'
import { google } from 'googleapis'

export async function POST (request) {
  const { to, date, slot, therapistName, therapistEmail, orderId } =
    await request.json()

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  try {
    // Parse start time and calculate end time (1 hour later)
    const [time, period] = slot.split(' ')
    const [startHourStr, startMinute] = time.split(':')
    let startHour = parseInt(startHourStr, 10)
    if (period === 'PM' && startHour !== 12) startHour += 12
    if (period === 'AM' && startHour === 12) startHour = 0

    const startDateTime = new Date(date)
    startDateTime.setHours(startHour, startMinute, 0)
    const endDateTime = new Date(startDateTime)
    endDateTime.setHours(endDateTime.getHours() + 1)

    // Google Calendar API setup
    const oAuth2Client = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      process.env.REDIRECT_URI
    )
    oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN })

    const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })

    // Create calendar event with a Meet link
    const event = {
      summary: `Session with ${therapistName}`,
      description: `Session booked with Better Together Wellness`,
      start: { dateTime: startDateTime.toISOString() },
      end: { dateTime: endDateTime.toISOString() },
      attendees: [
        { email: to }, // User
        { email: therapistEmail } // Therapist
      ],
      conferenceData: {
        createRequest: {
          requestId: orderId, // Unique ID for this request
          conferenceSolutionKey: { type: 'hangoutsMeet' }
        }
      }
    }

    const response = await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
      conferenceDataVersion: 1
    })

    const meetLink = response.data.hangoutLink

    // Create iCalendar (.ics) content
    const calendarInvite = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Better Together Wellness//EN
CALSCALE:GREGORIAN
METHOD:REQUEST
BEGIN:VEVENT
UID:${orderId}@bettertogether.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${startDateTime.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTEND:${endDateTime.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
SUMMARY:Session with ${therapistName}
DESCRIPTION:Your session with ${therapistName} is scheduled. Join the meeting at ${meetLink}
LOCATION:Online
ATTENDEE;CN=${therapistName};RSVP=TRUE:mailto:${therapistEmail}
ATTENDEE;CN=User;RSVP=TRUE:mailto:${to}
END:VEVENT
END:VCALENDAR`

    // Email to the user
    const userEmailContent = {
      from: process.env.EMAIL_USER,
      to,
      subject: 'Your Booking Confirmation with Calendar Invite',
      text: `Dear Customer,

Thank you for booking your session with Better Together Wellness.

Here are your session details:
- Therapist: ${therapistName}
- Date: ${date}
- Time Slot: ${slot}
- Booking ID: ${orderId}
- Google Meet Link: ${meetLink}

A calendar invite is attached to help you save the session in your calendar.

Best regards,
Better Together Wellness Team`,
      icalEvent: {
        filename: 'session-invite.ics',
        method: 'request',
        content: calendarInvite
      }
    }

    // Email to the therapist
    const therapistEmailContent = {
      from: process.env.EMAIL_USER,
      to: therapistEmail,
      subject: 'New Session Booking Alert with Calendar Invite',
      text: `Dear ${therapistName},

A new session has been booked with you.

Here are the session details:
- Date: ${date}
- Time Slot: ${slot}
- Booking ID: ${orderId}
- Google Meet Link: ${meetLink}

A calendar invite is attached to help you save the session in your calendar.

Best regards,
Better Together Wellness Team`,
      icalEvent: {
        filename: 'session-invite.ics',
        method: 'request',
        content: calendarInvite
      }
    }

    // Send both emails
    await transporter.sendMail(userEmailContent)
    await transporter.sendMail(therapistEmailContent)

    return new Response(JSON.stringify({ success: true, meetLink }), {
      status: 200
    })
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500
    })
  }
}
