import React, { useContext, useState, useEffect } from 'react'
import CommentSection from './PostComponents/CommentSection'
import PostHeader from './PostComponents/PostHeader'
import './PostComponents/Post.css';
import LikeSection from './PostComponents/LikeSection';
import ProfileContext from '../contexts/ProfileContext';
import { db } from '../Firebase';
import firebase from 'firebase'


function Post({ postId, caption, imageurl, profilepicurl, postusername }) {

  const profileinfo = useContext(ProfileContext);

  const [like, setLike] = useState(false);
  const [likelist, setLikelist] = useState([]);


  useEffect(() => {
    db.collection('posts').doc(postId).collection("likes").get()
      .then(snapshot => {
        setLikelist(snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        }))
      });
  }, [profileinfo, likelist, postId])

  useEffect(() => {

    const check = (like) => {

      return like.id === profileinfo.uid
    }
    if (likelist.filter(check).length > 0) {
      setLike(true);
    }
    else {
      setLike(false);
    }
  }, [likelist, profileinfo.uid])


  const LikePost = (event) => {
    event.preventDefault();
    setLike(true);

    db.collection("posts").doc(postId).collection("likes").doc(profileinfo.uid).set({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      userid: profileinfo?.uid,
    })
      .catch(error => {
        setLike(false);
        alert(error);
      })
  }

  const UnlikePost = event => {
    event.preventDefault();
    setLike(false);

    db.collection("posts").doc(postId).collection("likes").doc(profileinfo.uid).delete()
      .catch(error => {
        setLike(true);
        alert(error);
      })
  }

  return (
    <div className="Post">
      <PostHeader postusername={postusername} profilepicurl={profilepicurl} />
      <img
        className="Post_image"
        src={imageurl}
        alt={imageurl}
        onDoubleClick={LikePost}
      ></img>
      <LikeSection postId={postId} like={like} UnlikePost={UnlikePost} LikePost={LikePost} />
      <CommentSection postId={postId} caption={caption} postusername={postusername} likeno={likelist.length} />
    </div>
  )
}

export default Post
