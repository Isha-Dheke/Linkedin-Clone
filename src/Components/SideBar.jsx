import { Avatar } from "@mui/material";
import React from "react";
import { selectUser } from "../features/userSlice";
import {useSelector} from 'react-redux'


const SideBar = () => {

  const user = useSelector(selectUser)
  const recentItems = (topic) =>(
    <div className='flex text-sm p-1 hover:text-black cursor-pointer'>
      <span>#</span>
      <p>{topic}</p>
    </div>
  )
  return (
    <>
      <div className="grid grid-col sticky top-[80px] w-[30%] text-center">
        <div className=" rounded-xl  text-center  border-gray-300">
          <img
            className="mb-[-20px] rounded-xl max-h-32 ml-12"
            src="https://cdn.pixabay.com/photo/2023/06/18/12/17/meadow-8071932_1280.jpg"
            alt="Error loading"
          />
          <Avatar className='ml-[38%]'> {user.displayName[0]}</Avatar>
          <div className='text-left ml-[28%]'>
          <h1 className='font-bold text-lg ml-4'>{user.displayName}</h1>
          <h4 className='text-xs font-bold mb-3'>{user.email}</h4>
          </div>

          <div className='font-bold ml-[22%]' >
            <div className='flex gap-2 text-xs mb-2' >
              <p className='text-gray-500'>Who viewed you</p>
              <p className='text-blue-700 font-bold'>24,234</p>
            </div>
            <div className='flex gap-5 text-xs'>
              <p className='text-gray-500'>Views on post</p>
              <p className='text-blue-700 font-bold'>29,234</p>
            </div>
          </div>
        </div>
        <div className='text-left p-2 border-2 rounded-xl mt-3'>
          <p className='text-lg font-bold'>Recent</p>
          <div className='text-gray-500 text-sm font-semibold p-1 '>
          {recentItems('React js')}
          {recentItems('HTML')}
          {recentItems('Tailwind css')}
          {recentItems('JSON')}
          {recentItems('Rest API')}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
