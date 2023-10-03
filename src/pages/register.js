import React from "react";
function RegisterPage(){
    return(
        <div className="registerpage-contain">
            <div className="navbar">
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

        <form action="">
            <div className="container">
               
                <div className="container1">
               
                    <h1>D&Đ Fashion Shop</h1>
                    <div className="title">You have not had yes <br/>
                        account?
                    </div>
                    <div className="content">
                        Register to access all our features and create your own way.<br/> Free of charge.
                    </div>

                    <div className="icon">
                        <i className="bx bxl-facebook"></i>
                        <i className="bx bxl-google"></i>
                        <i className="bx bxl-telegram"></i>
                        <i className="bx bxl-instagram"></i>
                    </div>
               
                </div>

                <div className="container2">
                    <form action="">
                    <h1>Register</h1>
                    <div className="form-control">
                        <input id="username" type="text" placeholder="Username"/>
                        <i className='bx bxs-user'></i>
                        <small></small>
                        <span></span>
                    </div>
                    <div className="form-control">
                        <input id="email" type="email" placeholder="Email"/>
                        <i className="bx bx-envelope"></i>
                        <small></small>
                        <span></span>
                    </div>
                    <div className="form-control">
                        <input id="password" type="password" placeholder="Password"/>
                        <i className="bx bxs-lock-alt"></i>
                        <small></small>
                        <span></span>
                    </div>
                    <div className="form-control">
                        <input id="password" type="password" placeholder="Enter your Password"/>
                        <i className="bx bxs-lock-alt"></i>
                        <small></small>
                        <span></span>
                    </div>
                    <button type="submit" className="btnres">Register</button>
                    <div className="content">
                        Do you already have an account?
                        <a>Login</a>
                    </div>
                </form>
                </div>
             
            </div>
        </form>   
        </div>
    )
}

export default RegisterPage