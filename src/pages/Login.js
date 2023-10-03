import React from "react";

function LoginPage(){
    return(
        
        <div className="loginpage-contain">

        <div className="navbar-lg">
            <nav>
                <ul>
                    
                    <li><a href="">Home</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Posts</a></li>
                    <li><a href="">Introduce</a></li>
                    <li><a href="">Contact</a></li>
                </ul>

                <ul>
                    
                    <li><a href=""><i className="bx bx-search"></i></a></li>
                    <li><a href=""><i className="bx bxs-user"></i></a></li>
                </ul>
            </nav>
        </div>

        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    <i className='bx bxs-user'></i>
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <i className="bx bxs-lock-alt"></i>
                </div>
                <div className="remember-forget">
                    <label><input type="checkbox"/>Remember account</label>
                    <a>Forgot password</a>
                </div>
                <button type="submit" className="btn">Login</button>
                <div className="or">
                    <h5>---OR---</h5>
                </div>
                <div className="btnor">
                        <button className="btnfb">Facebook</button>
                        <button className="btngg">Google</button>
                </div>
                <div className="register-link">
                    <p>Do not have an account?<a>Register</a></p> 
                </div>
            </form>
        </div>
        </div>
    )
}

export default LoginPage