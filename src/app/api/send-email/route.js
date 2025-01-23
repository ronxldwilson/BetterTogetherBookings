import nodemailer from 'nodemailer'

export async function POST (request) {
  const { to, subject, text } = await request.json()

  const transporter = nodemailer.createTransport({
    service: 'Gmail', // or another provider
    auth: {
      user: process.env.EMAIL_USER, // Gmail username
      pass: process.env.EMAIL_PASS // Gmail app password
    }
  })

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text
    })
    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {

    return new Response(JSON.stringify({ error: error.message }), {
      status: 500
    })
  }
}
