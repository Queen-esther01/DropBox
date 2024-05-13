
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Home = () => {

    
    return (
        <div className='h-screen flex flex-col justify-between py-10'>
            <Header/>
            <div className='text-center px-5'>
                <h1>Upload files and get a link.</h1>
                <p className='mt-4 mb-10'>Sign in to create private files, all files uploaded without sign in cannot be made private.</p>
                <Link to='/upload'><Button>Start Uploading</Button></Link>
            </div>
            <Footer/>
        </div>
    )
}

export default Home