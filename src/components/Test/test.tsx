import React, { useLayoutEffect,useEffect } from 'react'


const Test = () => {
// 1473265
  console.log(1);

  setTimeout(()=>{
    console.log(2);
  },1000)

  useEffect(()=>{
    console.log(3);
  })

  useLayoutEffect(()=>{
    console.log(4);
  })

  useEffect(()=>{
    setTimeout(()=>{
      console.log(5);
    },1000)
  })

  useLayoutEffect(()=>{
    console.log(7)
    setTimeout(()=>{
      console.log(6);
    },1000)
  })

  return (
    <div>
      
    </div>
  )
}

export default Test
