import React, { useContext} from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if(firebase.apps.length===0)
{
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const history=useHistory();
    const location=useLocation();
    let { from} = location.state || { from: { pathname: "/" } };
    
    console.log(loggedInUser);
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
                var fbUser= result.user;
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
        <div>
            <h3>this is login</h3>
            <button onClick={handleGoogleSignIn}>Sign in</button>
            <button onClick={handleFbSignIn}>Sign in with fb</button>
        </div>
    );
};

export default Login;