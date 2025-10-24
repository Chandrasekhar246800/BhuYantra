import { NextRequest, NextResponse } from 'next/server'
import { sendAdminNotification, sendUserConfirmation } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Send emails
    try {
      // Send notification to admin
      await sendAdminNotification(data)
      
      // Send confirmation to user
      await sendUserConfirmation(data)
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'Your message has been sent successfully! We\'ll get back to you within 24-48 hours.' 
        },
        { status: 200 }
      )
    } catch (emailError) {
      console.error('Email sending error:', emailError)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
