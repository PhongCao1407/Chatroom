import './header.css'

import logo from './static/Logo.svg';
import home from './static/Home.png';
import downArrow from './static/DownArrow.svg';
import user from './static/User.png';
import setting from './static/Setting.svg';

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
        <div class="user-auth">
          <button>Login</button>
        </div>
        {/* <div className="user-info">
            <img src={user} alt=""/>
            <div className="user-info-bar">
                <p>Username123456</p>
            </div>
        </div>
        <div className="settings">
            <img src={setting} alt=""/>
        </div> */}
      </header>
    )
  }

  export {Header}