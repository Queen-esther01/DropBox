import React, { useRef } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Button from '../components/ui/Button'

const Upload = () => {

    const inputRef = useRef()
    
    return (
        <div className='h-screen flex flex-col justify-between py-10'>
            <Header/>
            <div className='border border-blue-100 border-dashed h-3/5 mx-5 rounded-md flex flex-col justify-center items-center '>
                <h2 className='mb-5'>Drag and drop files or click to upload</h2>
                <input type='file' />
                <Button>Upload</Button>
            </div>
            <Footer/>
        </div>
    )
}

export default Upload