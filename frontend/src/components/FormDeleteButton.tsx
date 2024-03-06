import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function FormDeleteButton() {
    const navigate=useNavigate();
  return (
    <button className='border-2 rounded border-black bg-red-400'onClick={()=>{navigate('/form')}} >Delete</button>
  )
}
