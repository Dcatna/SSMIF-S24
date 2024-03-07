'use client'
import React, {useState} from 'react'
//creating the same button everwhere
const Button = (label, onClick) => {
    
  return (
    <button className='mx-3 border-2 rounded-md border-black color bg-green-500 px-5'>{label}</button>
  )
}

export default Button