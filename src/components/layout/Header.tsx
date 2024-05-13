import React from 'react'
import Button from '../ui/Button'
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js'

const Header = () => {

    const [cookies, setCookie, removeCookie] = useCookies([]);
    
    console.log(cookies['token' as keyof typeof cookies])
    const isLoggedIn = cookies['token' as keyof typeof cookies]

    const url = new URL(`${import.meta.env.VITE_AUTH_URI}`)
    url.searchParams.set('client_id', `${import.meta.env.VITE_CLIENT_ID}`)
    url.searchParams.set('redirect_uri', `${import.meta.env.VITE_REDIRECT_URI}`)
    url.searchParams.set('response_type', `${import.meta.env.VITE_RESPONSE_TYPE}`)
    url.searchParams.set('scope', `email profile`)
    console.log(url.href)

    // Create a single supabase client for interacting with your database
    const supabase = createClient(import.meta.env.VITE_SUPABASE_PROJECT, import.meta.env.VITE_SUPABASE_API)
    console.log(supabase)
    console.log(import.meta.env.MODE)

    const triggerLogin = () => {
        supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `http://example.com/auth/callback`,
            },
        })
    }

    return (
        <header className='px-5 flex justify-between items-center'>
            <span><Link to='/'>MyDropBox.</Link></span>
            
            <div className='flex gap-4 items-center'>
                {
                    !isLoggedIn &&
                    <Button onClick={triggerLogin} outline>
                            Sign In
                        </Button>
                }
                <Link to='/'>Public Files</Link>
            </div>
        </header>
    )
}

export default Header