import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {


  return (
    <UserContextProvider>
      <h1 className='bg-green-400'>Alok</h1>
      <Login />
      <Profile />
    </UserContextProvider>
)  
}

export default App
