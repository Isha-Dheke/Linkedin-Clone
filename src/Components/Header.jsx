import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import WorkIcon from '@mui/icons-material/Work';
import { useDispatch } from "react-redux";
import { auth } from "./firebase";

import HeaderOptions from "./HeaderOptions";
import { logout } from "../features/userSlice";


const Header = () => {
  const dispatch = useDispatch();
const logoutApp = () =>{
  dispatch(logout())
  auth.signOut()
}
  return (
    <>
      <div className='sticky top-0 flex justify-between ml-[15%] mr-[10%] w-100 pt-2 pb-2'>
        <div className="flex">
          <LinkedInIcon/>
          <div>
            <SearchIcon />
            <input className="bg-gray-300" placeholder="Search"
            type="text" />
          </div>
        </div>
        <div className="flex gap-3 text-xs ">
          <HeaderOptions Icon={HomeIcon} title="Home" />
          <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOptions Icon={MessageIcon} title="Message" />
          <HeaderOptions Icon={NotificationsNoneIcon} title="Notification" />
          <HeaderOptions Icon={WorkIcon} title="Jobs" />
          <HeaderOptions onClick={logoutApp} avatar={true} />
        </div>
      </div>
      <div className='border-gray-300 border-[1px]'/>
    </>
  );
};

export default Header;
