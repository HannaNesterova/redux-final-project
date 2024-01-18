import {Link} from "react-router-dom";

function Login(){
    return(
        <div className="login_container">
            <div className="login-position">
                <div className="login_form">
                    <h2>Login</h2>
                        <form>
                            <p>Email</p>
                            <input placeholder="Email"/>
                            <p>Password</p>
                            <input placeholder="Password"/>
                        </form>
                        <button className="btn-log">LOGIN</button>
                </div>    
        </div>
        <Link to='/main'>
            <button className="btn-log">GO back</button>
        </Link>
        </div>
    )
}

export default Login;