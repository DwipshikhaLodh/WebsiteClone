import React from "react";
import NavBar from '../component/NavBar'

function Header() {
    return (
        <div className="flex flex-col justify-center items-center bg-orange-700 w-screen">
            <div className="flex flex-row bg-gradient-to-b from-sky-200 to-violet-900 ">
                <ul className="flex flex-row justify-evenly items-cente text-white" >
                    <li>Home</li>
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>

                <img src="" alt="logo"></img>

                <div>
                    <button>Sign up</button>
                    <button>Login</button>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Header;