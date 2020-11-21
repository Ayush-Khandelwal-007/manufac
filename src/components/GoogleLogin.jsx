import React from 'react'
import firebase from 'firebase'
import { FcGoogle } from 'react-icons/fc';


function GoogleLogin({dispatch}) {

    const continueWithGoogle = (e) => {
        e.preventDefault();
        const provider =new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((authUser) => {
                console.log(authUser.user);
            })
            .catch((err) => { alert(err.message); })

    }

    return (
        <div style={{cursor:'pointer'}} onClick={continueWithGoogle}>
        <FcGoogle className="Google" textAnchor="Continue with Google"/> Continue withGoogle
        </div>
    )
}

export default GoogleLogin
