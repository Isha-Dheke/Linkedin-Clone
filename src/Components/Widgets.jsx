import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import NewspaperIcon from '@mui/icons-material/Newspaper';

const Widgets = () => {
  const newsArticle = (heading, news) => (
    <div className='flex gap-2'>
      <div><NewspaperIcon/></div>
      <div>
      <div className='font-bold'>{heading}</div>
      <div className='font-semibold mb-2'>{news}</div>
      </div>
      
    </div>
  );
  return (
    <>
      <div className="grid justify-end mr-[10%]">
        <div className="-mt-[35rem] mr-8">
          <h1 className="border-2 border-black p-4 rounded">
            LinkedIn News <InfoIcon />
          </h1>
          {newsArticle("LinkedIn Latest News","Todays")}
          {newsArticle("Corona Virus News","Always")}
          {newsArticle("Vacancy News","Latest")}
          {newsArticle("New Movie Launch News","Latest")}
        </div>
      </div>
    </>
  );
};

export default Widgets;
