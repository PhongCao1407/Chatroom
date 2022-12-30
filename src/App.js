import './App.css';
import {HomePage} from './components/home-page/homePage';
import logo from './static/Logo.svg';
import home from './static/Home.png';
import downArrow from './static/DownArrow.svg';
import user from './static/User.png';
import setting from './static/Setting.svg';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="" class="logo"/>
      <div class="subscribed-subthread">
          <div class="thread-bar">
              <img src={home} alt="" class="home"/>
              <p>Home</p>
              <img src={downArrow} alt="" class="down-arrow"/>
          </div>
      </div>    
      <div class="search">
          <div class="search-bar">
              <input type="text" placeholder="Search.." class="search-bar-input"/>
          </div>
      </div>
      <div class="user-info">
          <img src={user} alt=""/>
          <div class="user-info-bar">
              <p>Username123456</p>
          </div>
      </div>
      <div class="settings">
          <img src={setting} alt=""/>
      </div>
    </header>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
    </div>
  );
}

export default App;
