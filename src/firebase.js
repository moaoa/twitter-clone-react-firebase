import firebase from 'firebase';
const firebaseConfig = {
    apiKey: 'AIzaSyCIqVfmq2ACn3HrqSg6Q8-tDrUEm-ua07k',
    authDomain: 'twitter-clone-ef178.firebaseapp.com',
    databaseURL: 'https://twitter-clone-ef178.firebaseio.com',
    projectId: 'twitter-clone-ef178',
    storageBucket: 'twitter-clone-ef178.appspot.com',
    messagingSenderId: '147807841163',
    appId: '1:147807841163:web:6b4e30d58cf62cd4691d8e',
    measurementId: 'G-7Z6PKN4N2H',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export const signUpUser = (email, password, name, imageUrl) => {
    return new Promise((resolve, reject) => {
        firebaseApp
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userData) => {
                userData.user
                    .updateProfile({
                        displayName: name,
                        photoURL: imageUrl,
                    })
                    .finally(resolve(userData));
            })
            .catch((e) => reject(e));
    });
};

export const signInUser = (email, password) => {
    return new Promise((resolve, reject) => {
        firebaseApp
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((userData) => resolve(userData))
            .catch((e) => reject(e));
    });
};

export default db;
