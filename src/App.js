import './App.css';
import { Thread } from './components/thread/thread';
import { Header } from './components/header/header';

import { LoginForm } from './components/login/Login';
import { CreatePost } from './components/createPost/createPost'
import { CreateSubthread } from './components/createSubthread/createSubthread';

import loginService from './services/loginService'
import userService from './services/userService';
 
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')


  const handleUsernameChange = (e) => {    
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    
    try {
      const user = await loginService.login({
        username, password
      })
      setUser(user)
      setUsername('')
      setPassword('')

      console.log(user)
    } catch (exception) {
      console.log(exception)
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault()

    let confirmPasswordComponent = document.getElementsByClassName('confirm-password')[0]
    let confirmPasswordValue = confirmPasswordComponent.value

    if (confirmPasswordValue !== password) {
      console.log('bad')
    } else {
      console.log('good')

      try {
        userService.signUp(
          {
          username: username, 
          passwordHash: password
          }
        ).then( async () => {
          // Sign in after new user is created
          const user = await loginService.login({
            username, password
          })
  
          setUser(user)
          setUsername('')
          setPassword('')
        })
      } catch (exception) {
        console.log(exception)
      }

    }
  }

  return (
    <div className="App">
      <LoginForm 
        handleUsernameChange={handleUsernameChange} 
        handlePasswordChange={handlePasswordChange} 
        handleLogin={handleLogin}
        handleSignup={handleSignup}/>
      <CreatePost/>
      <CreateSubthread/>
      <Header/>
      <Thread/>
    </div>
  );
}

export default App;
