import React, { useState, useContext } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from '../../../firebase';
import { GlobalContext } from '../../../App';
import firebase from 'firebase'

function TweetBox() {
    const { user } = useContext(GlobalContext);
    const [image, setImage] = useState('');
    const [text, setText] = useState('');
    const sendTweet = () => {
        db.collection('posts').add({
            displayName: user?.displayName,
            text,
            image,
            verified: true,
            avatar: user?.photoURL,
            postedBy: user?.uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setImage('');
        setText('');
    };
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={user?.photoURL} />
                    <input
                        onChange={(e) => setText(e.target.value)}
                        placeholder="what's happennig"
                        type="text"
                        value={text}
                    />
                </div>
                <input
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                    className="tweetBox__imageInput"
                    placeholder="enter image URL"
                />
                <Button onClick={sendTweet} className="tweetBox__tweetButton">
                    Tweet
                </Button>
            </form>
        </div>
    );
}

export default TweetBox;
