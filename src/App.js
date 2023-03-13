import './App.css';
import { Thread } from './components/thread/thread';
import { Header } from './components/header/header';

import { LoginForm } from './components/login/Login';
import { CreatePost } from './components/createPost/createPost'
import { CreateThread } from './components/createThread/createThread';

import loginService from './services/loginService'
import userService from './services/userService';
import threadService from './services/threadService'
 
import { useEffect, useState } from 'react';

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

  const handleLogin = (e) => {
    e.preventDefault()
    loginUser().then(() => {
      window.location.reload()
    })
  }

  const handleSignup = (e) => {
    // e.preventDefault()

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
          loginUser()
        })
      } catch (exception) {
        console.log(exception)
      }

    }
  }

  const loginUser = async () => {
    try {
      const user = await loginService.login({
        username, password
      })

      window.localStorage.setItem(
        'loggedChatroomUser', JSON.stringify(user)
      )

      threadService.setThreadToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')

      console.log(user)
    } catch (exception) {
      console.log(exception)
    }
  }

  const signOutUser = () => {
    window.localStorage.removeItem('loggedChatroomUser')
    window.location.reload()
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedChatroomUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      threadService.setThreadToken(user.token)
    }
  }, [])

  return (
    <div className="App">
      <LoginForm 
        handleUsernameChange={handleUsernameChange} 
        handlePasswordChange={handlePasswordChange} 
        handleLogin={handleLogin}
        handleSignup={handleSignup}
      />
      <CreatePost/>
      <CreateThread/>
      <Header
        signOutUser={signOutUser}
      />
      <Thread/>
    </div>
  );
}

export default App;
