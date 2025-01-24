import nodemailer from 'nodemailer';

export async function POST(request) {
  const { to, date, slot, therapistName, therapistEmail, orderId } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'Gmail', // or another provider
    auth: {
      user: process.env.EMAIL_USER, // Gmail username
      pass: process.env.EMAIL_PASS, // Gmail app password
    },
  });

  try {
    // Email to the user
    const userEmailContent = {
      from: process.env.EMAIL_USER,
      to,
      subject: 'Your Booking Confirmation',
      text: `Dear Customer,

Thank you for booking your session with Better Together Wellness.

Here are your session details:
- Therapist: ${therapistName}
- Date: ${date}
- Time Slot: ${slot}
- Booking ID: ${orderId}

If you have any questions or need to reschedule, please contact us.

Best regards,
Better Together Wellness Team`,
    };

    // Email to the therapist
    const therapistEmailContent = {
      from: process.env.EMAIL_USER,
      to: therapistEmail,
      subject: 'New Session Booking Alert',
      text: `Dear ${therapistName},

A new session has been booked with you.

Here are the session details:
- Date: ${date}
- Time Slot: ${slot}
- Booking ID: ${orderId}

Please ensure you are available during this time.

Best regards,
Better Together Wellness Team`,
    };

    // Send both emails
    await transporter.sendMail(userEmailContent);
    await transporter.sendMail(therapistEmailContent);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
