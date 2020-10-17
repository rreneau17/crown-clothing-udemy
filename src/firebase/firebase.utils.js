import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA7Znz8f_ir2wuR7mLKhR2mMq0Tmg4J8B0",
    authDomain: "crown-db-1bad6.firebaseapp.com",
    databaseURL: "https://crown-db-1bad6.firebaseio.com",
    projectId: "crown-db-1bad6",
    storageBucket: "crown-db-1bad6.appspot.com",
    messagingSenderId: "554596632258",
    appId: "1:554596632258:web:cdc85e6e0bcc6c68b79d5b"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => {
    console.log('clicked!');
    auth.signInWithPopup(provider)
};

export default firebase;




