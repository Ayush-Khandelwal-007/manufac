import React from 'react'
import ImageUpload from './FooterComponent/ImageUpload'
import './FooterComponent/Footer.css'


function Footer({profileinfo}) {

    return (
        <>
            {
                profileinfo ? (
                    <ImageUpload />
                ) : (
                        <h3 className="app_footer">You Need to login to Upload and Comment</h3>
                    )
            }

        </>
    )
}

export default Footer