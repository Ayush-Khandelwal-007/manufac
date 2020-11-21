import React from 'react'
import ImageUpload from './FooterComponent/ImageUpload'
import './FooterComponent/Footer.css'


function Footer({ profileinfo }) {

    return (
        <>
            {
                profileinfo ? (
                    <ImageUpload />
                ) : (
                        <div className="app_footer">
                            <h3>You Need to login to Upload and Comment</h3>
                        </div>
                    )
            }

        </>
    )
}

export default Footer