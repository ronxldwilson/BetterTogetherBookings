import { NextResponse } from 'next/server';
import { supabase } from './src/lib/supabase';

export async function middleware(request) {
    // Fetch the user's session from Supabase
    const { data: { user } } = await supabase.auth.getUser();

    // If the user is not logged in and tries to access `/dashboard`, redirect to `/login`
    if (!user && request.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // If the user is logged in, allow the request to proceed
    return NextResponse.next();
}