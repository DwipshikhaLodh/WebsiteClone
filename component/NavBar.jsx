import React from "react";
import Nav from '../component/Nav'

function NavBar() {
    return (
        <div className="flex flex-row justify-evenly items-center w-52 ">
            <ul className="flex flex-row justify-evenly items-cente text-white w-full" >
                <li>Home</li>
                <li>About</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
            <img src="" alt="logo"></img>
            <div className="flex flex-row justify-evenly items-center">
                <button className="border-white border-2 rounded-md">Sign up</button>
                <button>Login</button>
            </div>

        </div>

    )
}

export default NavBar;