import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import mainLogo from '../photos/Logojpeg.jpg'

function Login() {
    const signIn = () => {

    }
    return (
        <div className='login'>
            <div className='login__logo'>
                <img src={mainLogo} alt='logo'></img>

            </div>
            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
