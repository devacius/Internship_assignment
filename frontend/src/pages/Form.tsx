import React, { useState } from 'react'
import Axios from 'axios';
export default function Fomr
    () {
    const[username,setUsername]=useState("");
    const[phoneno,setphoneNo]=useState("");
    const[email,setEEmail]=useState("");
    const[hobbies,setHobbies]=useState("");

    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                <form className='border-4 p-5 border-black '>
                    <div className='flex flex-row p-3 w-70 '><p className='font-bold flex px-3 pb-3 w-25 pr-4 basis-1/2'>Name</p>
                        <input type="text " value={username} onChange={(e)=>{
                            setUsername(e.target.value);
                        }} placeholder='Enter your name' />
                    </div>
                    <div className='flex flex-row p-3 w-70'><p className='font-bold flex px-3 pb-3 basis-1/2'>
                        Phone No.
                    </p>
                        <input type="tel" value={phoneno} onChange={(e)=>{
                            setphoneNo(e.target.value);
                        }} placeholder='phoneno' />
                    </div>
                    <div className='flex flex-row p-3 w-70'>
                        <p className='font-bold flex px-3 pb-3 basis-1/2'>Email</p>
                        <input type="email " onChange={(e)=>{
                            setEEmail(e.target.value);
                        }} placeholder='Email' />
                    </div>
                    <div className='flex flex-row p-3 w-70'>
                        <p className='font-bold flex px-3 pb-3 basis-1/2'>
                            Hobbies
                        </p>
                        <input className="flex  h-24"type="text " onChange={(e)=>{
                            setHobbies(e.target.value);
                        }}  />
                    </div>
                    <button className='relative left-12 bg-black rounded-md w-60 justify-center h-8 place-self-center text-white' onClick={()=>{
          async () => {
            const response = await Axios.post("http://localhost:3000/api/v1/user/signin", {
              username,
              phoneno,
              email,
              hobbies
            });
            
          }
        }}>Save</button>
                </form>
            </div>

        </div>
    )
}
