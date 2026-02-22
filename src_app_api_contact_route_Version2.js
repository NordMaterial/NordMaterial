export async function POST(request) {
  try {
    const data = await request.json();
    
    // Simple validation
    if (!data.name || !data.email || !data.message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log the submission (in production, you'd send an email here)
    console.log('New contact form submission from NordMaterial:', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      message: data.message,
      timestamp: new Date().toISOString()
    });

    // TODO: Implement email sending to info@nordmaterial.com
    // You can use services like:
    // - Sendgrid
    // - Mailgun
    // - Nodemailer
    // - Resend
    // - AWS SES

    return Response.json(
      { success: true, message: 'Poptávka byla úspěšně odeslána' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing form:', error);
    return Response.json(
      { error: 'Chyba při odesílání formuláře' },
      { status: 500 }
    );
  }
}