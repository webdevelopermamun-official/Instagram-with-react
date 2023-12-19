import { Link } from "react-router-dom"
import "./AuthFooter.scss"

const AuthFooter = () => {
  return (
    <>
        <footer className="auth_footer">
            <div className="auth_footer_container">
                <div className="info_left">
                    <ul>
                        <li>
                            <Link>Meta</Link>
                        </li>
                        <li>
                            <Link>About</Link>
                        </li>
                        <li>
                            <Link>Blog</Link>
                        </li>
                        <li>
                            <Link>Jobs</Link>
                        </li>
                        <li>
                            <Link>Help</Link>
                        </li>
                        <li>
                            <Link>API</Link>
                        </li>
                        <li>
                            <Link>Privacy</Link>
                        </li>
                        <li>
                            <Link>Terms</Link>
                        </li>
                        <li>
                            <Link>Locations</Link>
                        </li>
                        <li>
                            <Link>Instagram Lite</Link>
                        </li>
                        <li>
                            <Link>Threads</Link>
                        </li>
                        <li>
                            <Link>Contact Uploading & Non-Users</Link>
                        </li>
                        <li>
                            <Link>Meta Verified</Link>
                        </li>
                    </ul>
                </div>
                <div className="info_right">
                    <select className="language_name" name="" id="">
                        <option value="">English</option>
                        <option value="">African</option>
                        <option value="">Arabic</option>
                        <option value="">Czech</option>
                        <option value="">Danish</option>
                        <option value="">Dutch</option>
                        <option value="">French</option>
                        <option value="">German</option>
                        <option value="">Greek</option>
                        <option value="">Hindi</option>
                        <option value="">Korean</option>
                        <option value="">Polish</option>
                        <option value="">Russian</option>
                        <option value="">Spanish</option>
                        <option value="">Swedish</option>
                        <option value="">Turkish</option>
                    </select>
                    <span>© 2023 Instagram from Meta</span>
                </div>
            </div>
        </footer>
    </>
  )
}

export default AuthFooter