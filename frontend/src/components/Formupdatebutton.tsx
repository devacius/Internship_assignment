import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Formupdatebutton() {
    const navigate=useNavigate();
  return (
    <button className='border-2 rounded border-black bg-blue-400' onClick={()=>{navigate('/form')}}> Update</button>

  )
}
