import "./AuthSignUpFooter.scss"

const AuthSignUpFooter = ({children}) => {
  return (
    <>
        <div className="link_signup">
            {children}
        </div>
        <div className="get_app">
            <p>Get the app.</p>
            <div className="app_download">
                <a href="#">
                <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="" />
                </a>
                <a href="#">
                <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="" />
                </a>
            </div>
        </div>
    </>
  )
} 

export default AuthSignUpFooter