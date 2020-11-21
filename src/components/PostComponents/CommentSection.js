import React, { useState, useEffect, useContext } from 'react'
import { db } from '../../Firebase'
import AddComment from './AddComment';
import ProfileContext from '../../contexts/ProfileContext'


function CommentSection({ postId, caption, postusername }) {

    const [comments, setComments] = useState([]);

    const profileinfo=useContext(ProfileContext);

    useEffect(() => {
        if (postId) {
            db.collection('posts').doc(postId).collection("comments").orderBy('timestamp', 'desc').onSnapshot(snapshot => {
                setComments(snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                      }
                }))
            })
        }
    }
        , [postId])

    return (
        <div className="Post_commentsection">
            <div className="Caption_section">
                <strong>{postusername} :</strong> {caption}
            </div>
            <div className="Comment_section">
                {comments.map(({id,username, text}) => (
                    <p key={id} className="comment">
                        <strong>{username} :</strong> {text}
                    </p>
                )
                )
                }
            </div>
            {
                profileinfo?(
                    <AddComment postId={postId} />
                ):(
                    <></>
                )
            }
        </div>
    )
}

export default CommentSection
