import React from 'react'
import PostComment from './PostComponents/CommentSection'
import PostHeader from './PostComponents/PostHeader'
import './PostComponents/Post.css';


function Post({ postId, caption, imageurl, profilepicurl, postusername }) {

    return (
        <div className="Post">
            <PostHeader postusername={postusername} profilepicurl={profilepicurl} />
            <img
                className="Post_image"
                src={imageurl}
                alt={imageurl}
            ></img>
            <PostComment postId={postId} caption={caption} postusername={postusername}/>
        </div>
    )
}

export default Post
