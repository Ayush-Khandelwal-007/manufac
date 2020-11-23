import React from 'react'
import Avatar from '@material-ui/core/Avatar'

function PostHeader({ postusername, profilepicurl }) {
    
    return (
        <div className="Post_header">
            <Avatar
                className="Avatar"
                alt={postusername}
                src={profilepicurl?profilepicurl: postusername}
            />  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <strong>{postusername}</strong>
        </div>
    )
}

export default PostHeader
