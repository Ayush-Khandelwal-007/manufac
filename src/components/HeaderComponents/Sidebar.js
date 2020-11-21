import React, { useContext } from 'react'
import './Header.css'
import { Button } from '@material-ui/core'
import { auth } from '../../Firebase'
import ProfileContext from '../../contexts/ProfileContext'

function Sidebar() {

    const profileinfo = useContext(ProfileContext);

    return (
        <div className="Header_Sidebar">
            {
                profileinfo ?

                    (
                        <><div className="LoggedIn_Info">
                            <p>Logged in as</p>
                            <h3> {profileinfo.displayName}</h3>
                        </div>
                            <Button onClick={() => auth.signOut()}>Logout</Button></>
                    ) :
                    (<></>)

            }

        </div>
    )
}

export default Sidebar
