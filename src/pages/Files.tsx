import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie';

const Files = () => {

    const [cookies, setCookie] = useCookies(['name']);


    useEffect(() => {
        setCookie('name', 'Esther', { path: '/',})
    }, [])
    

    return (
        <div>Files</div>
    )
}

export default Files