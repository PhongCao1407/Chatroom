import './header.css'

import logo from './static/Logo.svg';
import home from './static/Home.png';
import downArrow from './static/DownArrow.svg';
// import userImg from './static/User.png';
// import setting from './static/Setting.svg';


const showLoginForm = () => {
    const App = document.getElementsByClassName('App')[0]
    App.classList.add("AppBlur")

    const loginForm = document.getElementsByClassName('login-page')[0]
    loginForm.style.visibility = "visible"
}

const Header = () => {
   
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
          <button onClick={showLoginForm}>Login</button>
        </div>
        {/* <div className="user-info" id="user-info">
            <img src={userImg} alt=""/>
            <div className="user-info-bar">
                <p id="username"></p>
            </div>
        </div> */}
        
        {/* {//Make sure the log out is displayed only when the user is logged in
            Object.keys(user).length != 0 &&
            <button id="logout-button" onClick={(e) => handleSignout(e)}>Sign Out</button>
        } */}
        
      </header>
    )
  }

  export {Header}