import React from "react";
import { Avatar } from "@mui/material";
import TheMidInput from "./TheMidInput";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
const Post = ({ name, description, message }) => {
  return (
    <>
      <div className='border-2 p-2 rounded-xl'>
        <div className='flex mb-2'>
          <Avatar>{name[0]}</Avatar>
          <div className='ml-4'>
            <h1 className='text-sm'>{name}</h1>
            <p className='text-xs'>{description}</p>
          </div>
        </div>

        <div>
          <p className='font-semibold'>{message}</p>
        </div>

        <div className='flex text-xs gap-1'>
            <TheMidInput Icon={ThumbUpIcon} title='Like'/>
            <TheMidInput Icon={CommentIcon} title='Comment'/>
            <TheMidInput Icon={ShareIcon} title='Share'/>
            <TheMidInput Icon={SendIcon} title='Send'/>
        </div>
      </div>
    </>
  );
};

export default Post;
