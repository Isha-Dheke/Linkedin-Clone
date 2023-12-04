import React, {useEffect, useState} from "react";
import CreateIcon from "@mui/icons-material/Create";
import TheMidInput from "./TheMidInput";
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import Post from "./Post";
import { db } from './firebase';
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const TheMid = () => {
  const user = useSelector(selectUser)
  const[posts, setPosts] = useState([])
  const[input, setInput] = useState('')

  useEffect(()=>{
    db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot)=>
    setPosts(
      snapshot.docs.map((doc) =>({
        id:doc.id,
        data: doc.data(),
      }))
    )
    )
  },[])

  const sendpost = (e) =>{
    e.preventDefault()

    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message:input,
      photoURL:'',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }
 
  return (
    <>
      <div className="grid justify-center">
        <div  className="-mt-[27rem] w-[25rem] h-auto ">
          <div className="border-2 flex mt-5 rounded-xl px-2 py-2 border-gray-300"  >
          <CreateIcon/>
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} className="border-none" type="text" />
            <button onClick={sendpost} type="submit" > </button>
          </form>
          </div>
          <div className="flex text-xs p-2 text-gray-500  cursor-pointer">
          <TheMidInput Icon={ImageIcon} title="Photo" />
          <TheMidInput Icon={SubscriptionsIcon} title="Video" />
          <TheMidInput Icon={EventIcon} title="Event" />
          <TheMidInput Icon={ArticleIcon} title="Write Article" />
          </div>

          {posts.map(({id, data: {name, description, message, photoURL}})=>(
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoURL={photoURL}
            />
         ))}
          
        </div>
      </div>
      
    </>
  );
};

export default TheMid;
