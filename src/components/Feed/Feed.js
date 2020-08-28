import React, { useState, useEffect, useRef } from 'react';
import './Feed.css';
import TweetBox from './TweetBox/TweetBox';
import Post from './Post/Post';
import db from '../../firebase';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { firebaseApp } from '../../firebase';
import MobileOnlyContainer from '../MobileOnlyContainer/MobileOnlyContainer';

export default function Feed(props) {
    const [posts, setPosts] = useState([]);
    const feedRef = useRef(null);
    const history = useHistory();

    useEffect(() => {
        console.log(feedRef.current);

        db.collection('posts')

            .orderBy('createdAt', 'desc')
            .onSnapshot((snapshot) => {
                setPosts(
                    snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                );
            });
    }, []);

    return (
        <div className="Feed" ref={feedRef}>
            <div className="feed__header">
                <div>
                    <MobileOnlyContainer>
                        <div onClick={props.clicked}>
                            <MenuIcon className="menuToggler" />
                        </div>
                    </MobileOnlyContainer>
                    <h2>Home</h2>
                </div>
                <Button
                    className="logout__Button"
                    variant="contained"
                    color="danger"
                    onClick={() => {
                        firebaseApp.auth().signOut();
                        history.push('/');
                    }}
                >
                    Log out
                </Button>
            </div>
            <TweetBox />
            {posts.map((post) => (
                <Post
                    key={post.id}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
            ))}
        </div>
    );
}
