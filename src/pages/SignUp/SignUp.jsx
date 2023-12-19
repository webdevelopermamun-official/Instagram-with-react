import { Link } from "react-router-dom"
import AuthFooter from "../../components/AuthFooter/AuthFooter"
import Divider from "../../components/Divider/Divider"
import Forms from "../../components/Forms/Forms"
import AuthSignUpFooter from "../../components/AuthSignUpFooter/AuthSignUpFooter"
import "./SignUp.scss"

const SignUp = () => {
  return (
    <>
        <section className="signup_area">
            <div className="sign_up_container">
                <div className="signup_box_area">
                    <div className="signup_area_list">
                        <div className="signup_logo_info">
                            <img src="https://freelogopng.com/images/all_img/1658587465instagram-name-logo.png" alt="" />
                            <p>Sign up to see photos and videos from your friends.</p>
                            <Link className="fb_login_button">
                                <span className="fb_logo"></span>
                                <span>Log in with Facebook</span>
                            </Link>
                        </div>
                        <Divider />
                        <Forms>
                            <input type="text" placeholder="Mobile Number or Email" />
                            <input type="text" placeholder="Full Name" />
                            <input type="text" placeholder="Username" />
                            <input type="password" placeholder="Password" />
                            <p>People who use our service may have uploaded your contact information to Instagram. Learn More</p>
                            <p>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
                            <button type="submit">Sign up</button>
                        </Forms>
                    </div>
                    <AuthSignUpFooter>
                        <p>Have an account? <Link to="/auth">Log in</Link></p>
                    </AuthSignUpFooter>
                </div>
            </div>
        </section>

        <AuthFooter />
    </>

  )
}

export default SignUp