import React, { useState } from 'react'
import { auth } from './firebase'
import {useDispatch} from 'react-redux'
import { login } from '../features/userSlice'

const Login = () => {
    const[name, setName] = useState('')
    const[profile, setProfile] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const dispatch = useDispatch();
    
    const register = () =>{
        if(!name){
            alert('Please enter your full name')
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) =>{
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profile
            })
        .then(()=>{
            dispatch(login({
                email: userAuth.user.email,
                id: userAuth.user.uid,
                displayName: name,
                photoURL: profile
            }))
        })
        }).catch(error =>alert(error))
        
    }

    const loginApp = (e) =>{
        e.preventDefault()

        auth
        .signInWithEmailAndPassword(email, password)
        .then((userAuth) =>{
            dispatch(
                login({
                    email: userAuth.user.email,
                    id : userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.photoURL
                })
            )
        }).catch(error => alert(error))
    }
  return (
    <>
        <div className='h-auto w-[60%] ml-[12rem] '>
        <div>
            <img className='h-60 w-90 ' src='https://cdn.pixabay.com/photo/2017/08/22/11/55/linked-in-2668692_1280.png' alt='Error'/>
            </div>
            <div >
            <form className='w-52'>
                <input value={name} onChange={e => setName(e.target.value)} className='inline-block w-80 p-2 border-2 border-black m-2 rounded-xl text-center' type='text' placeholder='Full name'/>
                <input value={profile} onChange={e => setProfile(e.target.value)} className='inline-block w-80 p-2 border-2 border-black m-2 rounded-xl text-center' type='text' placeholder='Profile pic URL (optional)'/>
                <input value={email} onChange={e => setEmail(e.target.value)} className='inline-block w-80 p-2 border-2 border-black m-2 rounded-xl text-center' type='email' placeholder='Email'/>
                <input value={password} onChange={e => setPassword(e.target.value)} className='inline-block w-80 p-2 border-2 border-black m-2 rounded-xl text-center' type='password' placeholder='Password'/>
            
            </form>
            <div className='flex gap-32'>
            <button className='inline-block border-2 border-black p-2 uppercase ml-3 rounded-xl bg-blue-800 text-white' onClick={loginApp} type='submit'>Sign in</button>
            <div className='font-bold'>
                <p>Not a member?</p>
                <span className='text-blue-800 cursor-pointer' onClick={register}>Register now</span>
            </div>
            </div>
            </div>
           
        </div>
    </>
  )
}

export default Login