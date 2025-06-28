import { config } from "@/config"
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.GMAIL_APP_USERNAME,
      pass: config.GMAIL_APP_PASSWORD
    }
  })
}

async function sendThankYouEmail(userEmail: string) {
  const transporter = createTransporter()

  const mailOptions = {
    from: process.env.GMAIL_APP_USERNAME,
    to: userEmail,
    subject: "Welcome to Brownade - Early Access Confirmation",
    html: `
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Brownade</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #1a1a1a; line-height: 1.6;">
            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 40px 20px;">
                        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #2a2a2a; border-radius: 8px; box-shadow: 0 2px 20px rgba(0,0,0,0.3); border-collapse: collapse; border: 1px solid #3a3a3a;">
                            
                            <!-- Header -->
                            <tr>
                                <td style="background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
                                    <h1 style="margin: 0; color: #b8a082; font-size: 28px; font-weight: 600; letter-spacing: 1px;">
                                        Brownade.com
                                    </h1>
                                    <p style="margin: 10px 0 0 0; color: #9a9a9a; font-size: 16px; opacity: 0.9;">
                                        Innovation in Progress
                                    </p>
                                </td>
                            </tr>
                            
                            <!-- Main Content -->
                            <tr>
                                <td style="padding: 40px 30px;">
                                    <h2 style="margin: 0 0 20px 0; color: #b8a082; font-size: 24px; font-weight: 600;">
                                        Registration Confirmed
                                    </h2>
                                    
                                    <p style="margin: 0 0 20px 0; color: #cccccc; font-size: 16px;">
                                        Dear Valued Subscriber,
                                    </p>
                                    
                                    <p style="margin: 0 0 20px 0; color: #cccccc; font-size: 16px;">
                                        Thank you for your interest in <strong style="color: #b8a082;">Brownade.com</strong>. We are pleased to confirm that you have been successfully added to our early access notification list.
                                    </p>
                                    
                                    <div style="background-color: #333333; padding: 25px; border-radius: 6px; border-left: 4px solid #b8a082; margin: 25px 0;">
                                        <h3 style="margin: 0 0 15px 0; color: #b8a082; font-size: 18px; font-weight: 600;">
                                            What's Next?
                                        </h3>
                                        <p style="margin: 0; color: #cccccc; font-size: 15px;">
                                            You will receive priority notification via email as soon as our platform becomes available. We anticipate launching in the coming weeks and appreciate your patience as we finalize our product.
                                        </p>
                                    </div>
                                    
                                    <p style="margin: 20px 0; color: #cccccc; font-size: 16px;">
                                        Our team is committed to delivering an exceptional user experience, and we are excited to share our innovative platform with forward-thinking individuals like yourself.
                                    </p>
                                    
                                    <!-- Social Section -->
                                    <div style="background-color: #333333; border: 1px solid #444444; padding: 20px; border-radius: 6px; margin: 25px 0; text-align: center;">
                                        <h4 style="margin: 0 0 15px 0; color: #b8a082; font-size: 16px; font-weight: 600;">
                                            Stay Updated
                                        </h4>
                                        <p style="margin: 0 0 15px 0; color: #aaaaaa; font-size: 14px;">
                                            Follow our development progress and receive exclusive insights:
                                        </p>
                                        <a href="https://x.com/nopnapatn" style="display: inline-block; background-color: #b8a082; color: #2a2a2a; text-decoration: none; padding: 10px 20px; border-radius: 4px; font-size: 14px; font-weight: 500;">
                                            Follow on X (Twitter)
                                        </a>
                                    </div>
                                    
                                    <p style="margin: 30px 0 20px 0; color: #cccccc; font-size: 16px;">
                                        We appreciate your interest and look forward to providing you with early access to Brownade.
                                    </p>
                                    
                                    <p style="margin: 0; color: #cccccc; font-size: 16px;">
                                        Best regards,<br>
                                        <strong style="color: #b8a082;">Nop</strong><br>
                                        <span style="color: #aaaaaa; font-size: 14px;">Founder & CEO</span><br>
                                        <span style="color: #aaaaaa; font-size: 14px;">Brownade.com</span>
                                    </p>
                                </td>
                            </tr>
                            
                            <!-- Footer -->
                            <tr>
                                <td style="background-color: #1a1a1a; padding: 25px 30px; border-radius: 0 0 8px 8px; border-top: 1px solid #444444;">
                                    <p style="margin: 0 0 10px 0; color: #888888; font-size: 13px; text-align: center;">
                                        You are receiving this email because you registered for early access notifications at Brownade.com
                                    </p>
                                    <p style="margin: 0; color: #888888; font-size: 13px; text-align: center;">
                                        For inquiries, please reply directly to this email or contact our support team.
                                    </p>
                                </td>
                            </tr>
                            
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
    `
  }

  await transporter.sendMail(mailOptions)
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      )
    }

    await sendThankYouEmail(email)

    return NextResponse.json({
      success: true,
      message: "Thank you email sent successfully!"
    })
  } catch (error) {
    console.error("Email sending error:", error)

    return NextResponse.json(
      { success: false, message: "Failed to send email. Please try again." },
      { status: 500 }
    )
  }
}
