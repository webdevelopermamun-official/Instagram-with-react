import { Link } from "react-router-dom"
import auth_banner from "../../assets/img/banner.png"
import "./Auth.scss"
import AuthFooter from "../../components/AuthFooter/AuthFooter"
import AuthSignUpFooter from "../../components/AuthSignUpFooter/AuthSignUpFooter"
import Divider from "../../components/Divider/Divider"
import Forms from "../../components/Forms/Forms"

const Auth = () => {
  return (
    <>
      <section className="instagram_auth_signin">
        <div className="instagram_auth_signin_container">
          <div className="instagram_auth_signin_left">
            <img src={auth_banner} alt="" />
          </div>
          <div className="instagram_auth_signin_right">
            <div className="signin_area">
              <div className="logo">
                <img src="https://freelogopng.com/images/all_img/1658587465instagram-name-logo.png" alt="" />
              </div>
              <Forms action="post">
                <input type="text" placeholder="Phone number, username, or email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Log in</button>
              </Forms>
              <Divider />
              <div className="other_login">
                <Link className="fb_login_button" to="/">
                  <span className="fb_logo"></span>
                  <span>Log in with Facebook</span>
                </Link>
                <Link>Forgot password?</Link>
              </div>
            </div>
            <AuthSignUpFooter>
              <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </AuthSignUpFooter>
          </div>
        </div>
      </section>  

      <AuthFooter /> 
      
    </>
  )
}

export default Auth