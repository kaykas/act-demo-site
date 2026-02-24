import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log the submission (in a real app, this would send an email or save to a database)
    console.log('Contact form submission:', body);
    
    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. We will get back to you soon.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'An error occurred while processing your request.' 
      },
      { status: 500 }
    );
  }
}