import React, { useContext, useState } from 'react';
import './Profile.css';
import { GlobalContext } from '../../App';
import { Avatar, Input, Button } from '@material-ui/core';
import PopUp from '../PopUp/PopUp';
import { Redirect } from 'react-router-dom';
import { firebaseApp } from '../../firebase';
import Post from '../Feed/Post/Post';
import MobileOnlyContainer from '../MobileOnlyContainer/MobileOnlyContainer';
import MenuIcon from '@material-ui/icons/Menu';

function Profile(props) {
    const { user } = useContext(GlobalContext);
    const [isOpen, setIsOpen] = useState(false);
    const [photoUrl, setPhotoUrl] = useState('');
    const [userPosts, setUserPosts] = useState([]);

    const fetchPosts = () => {
        firebaseApp
            .firestore()
            .collection('posts')
            .where('postedBy', '==', user?.uid)
            .orderBy('createdAt', 'desc')
            .get()
            .then((snapshot) =>
                setUserPosts(
                    snapshot.docs.map((doc) => {
                        const post = doc.data();
                        return (
                            <Post
                                key={doc.id}
                                displayName={post.displayName}
                                username={post.username}
                                verified={post.verified}
                                text={post.text}
                                avatar={post.avatar}
                                image={post.image}
                            />
                        );
                    })
                )
            )
            .catch((e) => console.log(e));
    };

    const togglePopUp = () => {
        setIsOpen((prevState) => !prevState);
    };
    const changeUserPhoto = () => {
        const user = firebaseApp.auth().currentUser;
        if (user) {
            user.updateProfile({
                photoURL: photoUrl,
            }).finally(() => {
                togglePopUp();
            });
        }
    };
    if (!user) return <Redirect to="/home" />;
    fetchPosts();
    return (
        <div className="Profile">
            <MobileOnlyContainer>
                <div onClick={props.clicked}>
                    <MenuIcon className="menuToggler" />
                </div>
            </MobileOnlyContainer>
            <div className="row">
                <div className="col1">
                    <Avatar className="profile__avatar" src={user.photoURL} />
                    <Button variant="contained" onClick={togglePopUp}>
                        change photo
                    </Button>
                </div>
                <div className="col2">
                    <h3>{user.displayName}</h3>
                    <h4>{user.email}</h4>
                </div>
            </div>
            <div className="profile__posts">
                <ul>{userPosts}</ul>
            </div>

            <PopUp isOpen={isOpen} clicked={togglePopUp}>
                <div className="popUp__box">
                    <Button
                        className="popUp__closeButton"
                        onClick={() => togglePopUp()}
                        variant="contained"
                    >
                        close
                    </Button>
                    <Input
                        className="popUp__box__Input"
                        onChange={(e) => setPhotoUrl(e.target.value)}
                        value={photoUrl}
                    />{' '}
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={changeUserPhoto}
                    >
                        submit
                    </Button>
                </div>{' '}
            </PopUp>
        </div>
    );
}

export default Profile;
