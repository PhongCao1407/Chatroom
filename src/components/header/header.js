import './header.css'

import logo from './static/Logo.svg';
import home from './static/Home.png';
import downArrow from './static/DownArrow.svg';
import userImg from './static/User.png';
import setting from './static/Setting.svg';

import { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'

import { clientID } from '../../googleClient';

const Header = () => {
    const [ user, setUser ] = useState({})

    //Get call when signing in
    const handleCallbackResponse = (response) => {
        console.log(response)
        console.log("Encoded JWT ID token: " + response.credential)
        let userObject = jwt_decode(response.credential)

        setUser(userObject)

        // Hide google button
        const loginButton = document.getElementById("login-button")
        loginButton.style.display = "none"

        //Fix layout and show username and settings
        const header = document.getElementsByTagName("header")[0]
        header.style.gridTemplateColumns = "1fr 2fr 4fr 1fr 1fr"

        console.log(userObject)
        const userInfo = document.getElementById("user-info")
        userInfo.style.display = "flex"

        const username = document.getElementById("username")
        username.textContent = userObject.name

      }

      //Get call when signing in
      const handleSignout = () => {
        //Delete user from current session
        setUser({})

        //Fix stylings
        const loginButton = document.getElementById("login-button")
        loginButton.style.display = "flex"

        const header = document.getElementsByTagName("header")[0]
        header.style.gridTemplateColumns = "1fr 2fr 4fr 2fr"

        const userInfo = document.getElementById("user-info")
        userInfo.style.display = "none"

        const username = document.getElementById("username")
        username.textContent = ""
      }
    
      //Render google sign in button
      useEffect(() => {   
        const google = window.google

        //Setup google client
        google.accounts.id.initialize({
          client_id: clientID,
          callback: handleCallbackResponse
        })
    
        //Render button
        google.accounts.id.renderButton(
          document.getElementById("login-button"), 
          {
            theme: "outline",
            size: "large",
          }
        )
      }, [])

    return (
      <header>
        <img src={logo} alt="" className="logo"/>
        <div className="subscribed-subthread">
            <div className="thread-bar">
                <img src={home} alt="" className="home"/>
                <p>Home</p>
                <img src={downArrow} alt="" className="down-arrow"/>
            </div>
        </div>    
        <div className="search">
            <div className="search-bar">
                <input type="text" placeholder="Search.." className="search-bar-input"/>
            </div>
        </div>
        <div className="user-auth" id="login-button">
        </div>
        <div className="user-info" id="user-info">
            <img src={userImg} alt=""/>
            <div className="user-info-bar">
                <p id="username"></p>
            </div>
        </div>
        {//Make sure the log out is displayed only when the user is logged in
            Object.keys(user).length != 0 &&
            <button id="logout-button" onClick={(e) => handleSignout(e)}>Sign Out</button>
        }
        
        {/* <div className="settings" >
            <img src={setting} id="settings" alt=""/>
        </div> */}
      </header>
    )
  }

  export {Header}