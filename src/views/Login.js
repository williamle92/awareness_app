import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import mainLogo from '../photos/Logojpeg.jpg'
import { auth, provider } from '../firebase'
import { actionTypes } from '../reducer'
import { useStateValue } from '../StateProvider'



function Login() {
    const [state, dispatch] = useStateValue();


    const signIn = () => {
        
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => alert(error.message));
    }
    return (
        <div className='login'>
            <div className='login__logo'>
                <img src={mainLogo} alt='logo'></img>

            </div>
            <Button type='submit' onClick={signIn}>
                Sign In with Google
            </Button>
        </div>
    )
}

export default Login
