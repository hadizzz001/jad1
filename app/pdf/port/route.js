import { NextResponse } from 'next/server';

export function GET() {
  // Redirect to the port.pdf file in the public folder
  return NextResponse.redirect(new URL('/port.pdf', 'https://jadzeitouni.netlify.app'));
}
