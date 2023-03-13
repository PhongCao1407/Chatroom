import './header.css'

import logo from './static/Logo.svg';
import home from './static/Home.png';
import downArrow from './static/DownArrow.svg';
import userImg from './static/User.png';
import { useEffect } from 'react';

import { Dropdown } from '../dropdown/Dropdown';
// import setting from './static/Setting.svg';


const Header = (props) => {
    

    const showLoginForm = () => {
        const App = document.getElementsByClassName('App')[0]
        App.classList.add("AppBlur")

        const loginForm = document.getElementsByClassName('login-page')[0]
        loginForm.style.visibility = "visible"
    }


    useEffect(() => {
        // Get all threads to display in dropdowm menu

        // User Auth
        const loginButton = document.getElementsByClassName('user-auth')[0]
        const userInfo = document.getElementsByClassName('user-info')[0]

        if (window.localStorage.length !== 0) {
            loginButton.style.display = 'none'
            userInfo.style.display = 'flex'

            const username = JSON.parse(window.localStorage.loggedChatroomUser).username
            const usernameDiv = document.getElementById('username')
            usernameDiv.textContent = username
        } else {
            loginButton.style.display = 'flex'
            userInfo.style.display = 'none'
        }
    }, [])

    return (
        <header>
            <img src={logo} alt="" className="logo" />

            <Dropdown
                isSearchable
                placeHolder="Select The Thread.."
                onChange={(value) => console.log(value)}
            />

            <div className="user-auth" id="login-button">
                <button onClick={showLoginForm}>Login</button>
            </div>
            <div className="user-info" id="user-info">
                <div className="user-info-bar">
                    <p id="username"></p>
                </div>
                <button id="logout-button" onClick={props.signOutUser}>Sign Out</button>
            </div>


        </header>
    )
}

export { Header }