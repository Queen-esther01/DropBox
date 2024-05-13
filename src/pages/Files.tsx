import { useEffect } from 'react'
import { useCookies } from 'react-cookie';

const Files = () => {

    const [_, setCookie] = useCookies(['name']);


    useEffect(() => {
        setCookie('name', 'Esther', { path: '/',})
    }, [])
    

    return (
        <div>Files</div>
    )
}

export default Files