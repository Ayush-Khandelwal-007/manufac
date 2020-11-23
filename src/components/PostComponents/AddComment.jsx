import React, { useState, useContext } from 'react'
import { BsFillCaretRightFill, BsCaretRight } from 'react-icons/bs';
import { db } from '../../Firebase'
import firebase from 'firebase'
import ProfileContext from '../../contexts/ProfileContext'


function AddComment({ postId }) {
  const [comment, setComment] = useState('');

  const profileinfo = useContext(ProfileContext);

  const PostComment = (event) => {
    event.preventDefault();
    if (profileinfo) {

      db.collection("posts").doc(postId).collection("comments").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        username: profileinfo?.displayName,
        text: comment
      })
      setComment('');
    }
  }

  return (
    <div>
      <form className='Comment_form'>
        <input
          className="comment_input"
          placeholder="Add a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className='Comment_Post_Button'
          disabled={!comment}
          type='submit'
          onClick={PostComment}
        >
          {
            comment ? (<BsFillCaretRightFill className="arrow" size="2em" color="#2460bf" />
            ) : (
                <BsCaretRight className="arrow" size="2em" color="#2460bf" />
              )
          }

        </button>
      </form>
    </div>
  )
}

export default AddComment
