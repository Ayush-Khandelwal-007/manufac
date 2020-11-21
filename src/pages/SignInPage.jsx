import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as ROUTES from '../routes/Routes';
import {auth} from '../firebase'

const SignInPage = () => {

    const [userinfo, setUserinfo] = useState({
        displayName: '',
        email: '',
        password: ''
    });

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(userinfo.email, userinfo.password)
            .then((authUser) => {
                console.log(authUser.user);
            })
            .catch((err) => { alert(err.message); })
    }

    return (
        <div className="Sign_In_Form">
            <form>
                <div className="Sign_In_Input_Fields">
                    <input
                        className='input_field'
                        type="text"
                        placeholder="Email"
                        value={userinfo.email}
                        onChange={e => setUserinfo({ ...userinfo, email: e.target.value })}
                    />
                    <input
                        className='input_field'
                        type="password"
                        placeholder="Password"
                        value={userinfo.password}
                        onChange={e => setUserinfo({ ...userinfo, password: e.target.value })}
                    />
                    <button className="SignButt" type="submit" onClick={signIn}>Sign In</button>
                </div>
            </form>
            <br></br>
            <p>Don't have an account? <Link to={ROUTES.SIGN_UP} >SignUp</Link></p>
            {/* <GoogleLogin /> */}
        </div>
    )
}

export default SignInPage
