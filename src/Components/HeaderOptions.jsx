
import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

const HeaderOptions = ({Icon, title, avatar, onClick}) => {   
  const user = useSelector(selectUser)
  return (
    <>
    <div className='flex flex-col hover:text-gray-300 cursor-pointer'>
        {Icon && <Icon/>}
        {avatar && (
            <Avatar onClick={onClick} className='ml-5'>{user?.displayName[0]}</Avatar>
        )}
        {title}
    </div>
    
    </>
  )
}

export default HeaderOptions