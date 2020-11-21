import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as ROUTES from '../routes/Routes';
import {auth} from '../Firebase'
import { Input, Button } from '@material-ui/core';
import GoogleLogin from '../components/GoogleLogin';

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
                    <Input
                        className='input_field'
                        type="text"
                        placeholder="Email"
                        value={userinfo.email}
                        onChange={e => setUserinfo({ ...userinfo, email: e.target.value })}
                    />
                    <Input
                        className='input_field'
                        type="password"
                        placeholder="Password"
                        value={userinfo.password}
                        onChange={e => setUserinfo({ ...userinfo, password: e.target.value })}
                    />
                    <Button className="SignButt" type="submit" onClick={signIn}>Sign In</Button>
                </div>
            </form>
            <br></br>
            <p>Don't have an account? <Link to={ROUTES.SIGN_UP} className='Change_Form' >Sign Up</Link></p>
            <GoogleLogin />
        </div>
    )
}

export default SignInPage
