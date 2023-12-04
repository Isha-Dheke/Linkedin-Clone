import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { auth } from './Components/firebase'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import TheMid from './Components/TheMid'
import Widgets from './Components/Widgets'
import Login from './Components/Login'
import { login, logout, selectUser } from './features/userSlice'
import { useEffect } from 'react'

function App() {
const user = useSelector(selectUser)
const dispatch = useDispatch();
useEffect(() =>{
  auth.onAuthStateChanged((userAuth)=>{
    if(userAuth){
      dispatch(login({
        email : userAuth.email,
        id: userAuth.uid,
        displayName: userAuth.displayName,
        photoURL: userAuth.photoURL
      }))
    }
    else{
      dispatch(logout())
    }
  })
}, [])
  return (
    <>
      <Header/>
      {!user ? <Login/> :
        <div>
        <SideBar/>
        <TheMid/>
        <Widgets/>
        </div>
       }
      
    </>
  )
}

export default App
