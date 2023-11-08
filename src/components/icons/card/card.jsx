import React from 'react'

const Card = (props) => {
  return (
    <div className=" relative w-[428px] h-[209px] bg-[#363062] rounded-lg p-5 border-2 text-center flex items-center justify-center  ">
       <p>{props.text}</p>  

        <p className=' absolute bottom-0 right-0 p-10 '>- {props.name}</p>
    </div>
  )
}

export default Card