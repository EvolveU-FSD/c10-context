import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Footer from './components/footer'
import Login from './components/loginPage'
import Main from './components/mainPage'
import { UserContext } from './context/userContext'

function App() {
  const {user, setUser} = useContext(UserContext)

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', 
      position: 'fixed', width: '100%', height: '100%', left: 0, top: 0}}>
      <div style={{flexGrow: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
        {user == null ? 
          <Login setUser={setUser}/> :
          <Main user={user}/>
        }
      </div>
      <Footer user={user} setUser={setUser} />
    </div>
  )
}

export default App
