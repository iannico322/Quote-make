import React from 'react'

const Icon = (props) => {
  return (
    <div className=' relative rounded-md  py-10  w-full h-11  flex flex-col items-center justify-center box-border 
    hover:bg-gray-800
    hover:cursor-pointer
    
    
    '>
        <span className=" flex flex-col items-center material-symbols-outlined">
       {props.icon}
        </span>
        <p className=' text-xs'>{props.text}</p>
    </div>
  )
}

export default Icon