import React from 'react'

const TheMidInput = ({Icon, title}) => {
  return (
    <>
    <div className='p-4 hover:bg-slate-300 border-none rounded'>
    {Icon && <Icon/>}
    {title}
    </div>
   
    </>
  )
}

export default TheMidInput