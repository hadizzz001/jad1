import { NextResponse } from 'next/server';

export function GET() {
  // Redirect to the cv.pdf file in the public folder
  return NextResponse.redirect(new URL('/cv.pdf', 'https://jadzeitouni.netlify.app'));
}
