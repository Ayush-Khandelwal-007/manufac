import React, { useContext, useState } from 'react'
import { Button } from '@material-ui/core'
import firebase from 'firebase';
import { storage, db } from '../../firebase'
import ProfileContext from '../../contexts/ProfileContext'

function ImageUpload() {
    const [caption, setCaption] = useState('');
    const [inputImage, setInputImage] = useState(null);
    const [progress, setProgress] = useState(0);

    const profileinfo=useContext(ProfileContext);

    const Upload = () => {
        if(caption!=='' && inputImage ){
            UploadPost();
        }
    }

    const UploadPost = () => {
        const uploadTask = storage.ref(`images/${inputImage.name}`).put(inputImage)
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(prog);
            },
            (error) => {
                console.log(error);
            },
            () => {
                storage
                    .ref('images')
                    .child(inputImage.name)
                    .getDownloadURL()
                    .then((url) => {
                        db.collection("posts").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imageurl: url,
                            displayName: profileinfo.displayName,
                        });
                        setProgress(0);
                        setCaption('');
                        setInputImage(null);
                    })
            }
        )
    }

    return (
        <div className="app_footer">
            <progress value={progress} className="Progress_bar" max="100%" />
            <div className="Upload_data">
                <input
                    type="file"
                    onChange={(e) => {
                        if (e.target.files[0]) setInputImage(e.target.files[0])
                    }}
                />
                <input
                    type="text"
                    className="Caption_input"
                    placeholder="Caption"
                    value={caption}
                    onChange={(e) => { setCaption(e.target.value) }}
                />
                <Button className="Upload_button" onClick={Upload}>Upload</Button>
            </div>
        </div>
    )
}

export default ImageUpload
