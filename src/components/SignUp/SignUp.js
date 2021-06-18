import React from 'react';
import '../Login/Login.css';
const SignUp = () => {
    return (
        <div>
            <div className="signin-form">
                <form action="/examples/actions/confirmation.php" method="post">
                    <h2>Create An Account</h2>
                    <p className="hint-text">Sign up with your social media account or email address</p>
                    <div className="d-flex justify-content-center align-items-center ">
                        <a style={{ backgroundColor: '#507cc0', color: '#fff' }} href="#" className="btn border border-2 rounded-circle btn-lg mr-2 " title="Facebook"><i className="fa fa-facebook"></i></a>
                        <a style={{ backgroundColor: '#64ccf1', color: '#fff' }} href="#" className="btn border border-2 rounded-circle  btn-lg mr-2" title="Twitter"><i className="fa fa-twitter"></i></a>
                        <a style={{ backgroundColor: '#df4930', color: '#fff' }} href="#" className="btn border border-2 rounded-circle btn-lg" title="Google"><i className="fa fa-google"></i></a>
                    </div>
                    <div className="or-seperator"><b>or</b></div>
                    <div className="form-group">
                        <input type="text" className="form-control input-lg" name="username" placeholder="Username" required="required" />
                    </div>
                    <div className="form-group">
                    <input type="email" class="form-control input-lg" name="email" placeholder="Email Address" required="required"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control input-lg" name="password" placeholder="Password" required="required" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control input-lg" name="confirm_password" placeholder="Confirm Password" required="required" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-lg btn-block signin-btn">Sign Up</button>
                    </div>
                    <div className="text-center small">Already have an account? <a href="/login">Login here</a></div>
                </form>

            </div>
        </div>
    );
};

export default SignUp;