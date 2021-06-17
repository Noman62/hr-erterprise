import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { SocialIcon } from 'react-social-icons';

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
        <div className=" shadow p-3 mb-5 bg-body rounded" style={{ width: '350px', height: '480px', textAlign: 'center', marginLeft: '38%', marginTop: '5%' }}>
            <div className="signin-form">
                <form action="/examples/actions/confirmation.php" method="post">
                    <h2>Sign in</h2>
                    <p className="hint-text">Sign in with your social media account</p>
                    <div className="social-btn mb-3  text-center">
                        <a href="#" className="btn btn-primary btn-lg mr-3 rounded-circle" title="Facebook" onClick={handleFbSignIn}><i className="fa fa-facebook"></i></a>
                        <a href="#" className="btn btn-danger btn-lg mr-3 rounded-circle" title="Google" onClick={handleGoogleSignIn}><i className="fa fa-google"></i></a>
                        <a href="#" class="btn btn-info btn-lg rounded-circle" title="Twitter"><i class="fa fa-twitter"></i></a>

                    </div>
                    <div style={{ margin: '50px 0 15px', textAlign: 'center', borderTop: '1px solid #e0e0e0' }} ><b style={{
                        padding: '0 10px',
                        width: '40px',
                        height: '40px',
                        fontSize: '16px',
                        textAlign: 'center',
                        lineHeight: '40px',
                        background: ' #fff',
                        display: 'inline-block',
                        border: '1px solid #e0e0e0',
                        borderRadius: '50%',
                        position: 'relative',
                        top: '-22px',
                        zIndex: '1'
                    }}>or</b></div>
                    <div className="form-group">
                        <input type="text" className="form-control input-lg" name="username" placeholder="Username" required="required" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control input-lg" name="password" placeholder="Password" required="required" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-lg btn-block signin-btn rounded-pill">Sign in</button>
                    </div>
                    <div className="text-center small"><a href="#">Forgot Your password?</a></div>
                    <div class="text-center small">Don't have an account? <a href="/signUp">Sign up</a></div>
                </form>
                
            </div>
        </div>
    );
};

export default Login;