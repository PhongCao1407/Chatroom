import './App.css';
import {HomePage} from './components/home-page/homePage';
import { Header } from './components/header/header';


function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
    </div>
  );
}

export default App;
