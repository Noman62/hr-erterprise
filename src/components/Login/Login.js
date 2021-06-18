import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css';

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
        <div  >
            <div className="signin-form">
                <form action="/examples/actions/confirmation.php" method="post">
                    <h2>Sign in</h2>
                    <p className="hint-text">Sign in with your social media account</p>
                    <div className="d-flex justify-content-center align-items-center ">
                        <a style={{backgroundColor:'#507cc0',color:'#fff'}} href="#" className="btn border border-2 rounded-circle btn-lg mr-2 " title="Facebook"><i className="fa fa-facebook"></i></a>
                        <a style={{backgroundColor:'#64ccf1',color:'#fff'}} href="#" className="btn border border-2 rounded-circle  btn-lg mr-2" title="Twitter"><i className="fa fa-twitter"></i></a>
                        <a style={{backgroundColor:'#df4930',color:'#fff'}} href="#" className="btn border border-2 rounded-circle btn-lg" title="Google"><i className="fa fa-google"></i></a>
                    </div>
                    <div className="or-seperator"><b>or</b></div>
                    <div className="form-group">
                        <input type="text" className="form-control input-lg" name="username" placeholder="Username" required="required" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control input-lg" name="password" placeholder="Password" required="required" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-lg btn-block signin-btn">Sign in</button>
                    </div>
                    <div className="text-center small"><a href="#">Forgot Your password?</a></div>
                    <div className="text-center small">Don't have an account? <a href="/signUp">Sign up</a></div>
                </form>
                
            </div>
        </div>
    );
};

export default Login;