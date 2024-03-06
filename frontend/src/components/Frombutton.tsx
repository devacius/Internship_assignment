import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Frombutton() {
    const navigate=useNavigate();
  return (
    <button className='border-2 rounded border-black bg-green-300 w-24' onClick={()=>{ navigate("/form") }}>Add </button>
  )
}
