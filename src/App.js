import './App.css';
import { Thread } from './components/thread/thread';
import { Header } from './components/header/header';

import { LoginForm } from './components/login/Login';
import { CreatePost } from './components/createPost/createPost'
import { CreateSubthread } from './components/createSubthread/createSubthread';

function App() {
  return (
    <div className="App">
      <LoginForm/>
      <CreatePost/>
      <CreateSubthread/>
      <Header/>
      <Thread/>
    </div>
  );
}

export default App;
