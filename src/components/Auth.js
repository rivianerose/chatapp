import {auth, provider } from '../firebase-config.js'
import { signInWithPopup } from 'firebase/auth'
import Cookies from 'universal-cookie'
import '../styles/Auth.css'

const cookies = new Cookies();

export const Auth = (props) => {

     const {setIsAuth } = props;

    const signInWithGoogle = async () => {
        try {
      const result =  await signInWithPopup(auth, provider)
      cookies.set("auth-token", result.user.refreshToken )
      setIsAuth(true)
        } catch(err) {
            console.error(err)
        }
    }
    return <div classname="auth"> 
    <p>
        Sign In With Google to Continue
    </p>

    <button onClick={signInWithGoogle}> Sign In With Google </button>
    </div>
}