// app/api/join/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || typeof email !== 'string') {
    return NextResponse.json({ message: 'Invalid email' }, { status: 400 });
  }

  console.log('Email:', email);

  const { error } = await supabase.from('waitlist_emails').insert({ email });

  if (error) {
    console.error('Supabase error:', error);
    return NextResponse.json({ message: 'Error storing email' }, { status: 500 });
  }

  return NextResponse.json({ message: 'Email added successfully' }, { status: 200 });
}
