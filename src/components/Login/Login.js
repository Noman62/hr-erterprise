import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const provider = new firebase.auth.GoogleAuthProvider();
    var fbProvider = new firebase.auth.FacebookAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then((result) => {

                var credential = result.credential;
                var token = credential.accessToken;
                var googlUser = result.user;
                setLoggedInUser(googlUser);
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }


    const handleFbSignIn = () => {
        firebase
            .auth().signInWithPopup(fbProvider)
            .then((result) => {

                var credential = result.credential;
                var fbUser = result.user;
                var accessToken = credential.accessToken;
                setLoggedInUser(fbUser);
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }

    return (
        <div class="card shadow-sm p-3 mb-5 bg-body rounded" style={{width: '18rem',textAlign:'center',marginLeft:'40%',marginTop:'10%'}}>
            <div class="card-body">
            <h3 class="p-3 mb-2 bg-warning text-dark" >Login Page</h3>
            <button class="p-3 mb-2 bg-success text-white rounded-pill" onClick={handleGoogleSignIn}>Sign in with Google</button>
            <button class="p-3 mb-2 bg-primary text-white rounded-pill" onClick={handleFbSignIn}>Sign in with facebook</button>
            </div>


        </div>
    );
};

export default Login;