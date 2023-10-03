import React from "react";
function ForgotPage(){
    return(
        <div className="forgotpage-contain">
            <div class="navbar-fg">
            <nav>
                <ul>
                    
                    <li><a href="">Home</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Posts</a></li>
                    <li><a href="">Introduce</a></li>
                    <li><a href="">Contact</a></li>
                </ul>

                <ul>
                    
                    <li><a href=""><i class="bx bx-search"></i></a></li>
                    <li><a href=""><i class="bx bxs-user"></i></a></li>
                </ul>
            </nav>
        </div>

        <div class="wrapper-fg">
            <form action="">
                <h1>Forgot Password</h1>
                <div class="input-box-fg">
                    <input id="email" type="email" placeholder="Email"/>
                    <i class="bx bx-envelope"></i>
                </div>

                <button type="submit" class="btn-fg">Continue</button>

                <div class="register-link-fg">
                   
                    <p>Do not have an account?<a>Register</a></p> 
                </div>
            </form>
        </div>
        </div>
    )
}

export default ForgotPage