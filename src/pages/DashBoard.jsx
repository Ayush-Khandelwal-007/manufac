import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import Post from '../components/Post'
import './Page.css'

const DashBoard = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                post: doc.data()
              }
            }))
          })
    }, [])

    return (
        <div className="Dashboard">
            {
                posts.map(({ id, post }) => <Post postId={id} caption={post.caption} imageurl={post.imageurl} profilepicurl={post.profilepicurl} postusername={post.displayName} key={id} />)
            }
        </div>
    )
}

export default DashBoard
