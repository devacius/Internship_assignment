import React from 'react'
import { BrowserRouter, Routes, useNavigate,Route } from 'react-router-dom';
import { Suspense } from 'react';
import Form from './pages/Form';
import Table from './pages/Table';
import Home from './pages/Home';
import Loading from './components/Loading';

export default function App() {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-slate-300' >
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Suspense fallback={<Loading />}><Home /> </Suspense>} />
          <Route path="/form" element={<Suspense fallback={<Loading />}><Form /> </Suspense>} />
          <Route path="/table" element={<Suspense fallback={<Loading />}><Table /> </Suspense>} />

        </Routes>
      </BrowserRouter>

    </div>

  )

  function Appbar() {
    const navigate = useNavigate();
    return (
      <div className='h-12 w-full scroll-m-0 '>
      <div className=' absolute  top-1 right-0 flex flex-row  justify-end  w-1/4 h-10 rounded border-4 border-black divide-x-2'>
        <button className='bg-slate-700 text-white basis-1/2 hover:basis-2/3 ' onClick={() => {
          navigate("/form");
        }}>
          Form
        </button>
        <button className='bg-slate-700 text-white basis-1/2 hover:basis-2/3 ' onClick={() => {
          navigate("/table");
        }}>
          Table
        </button>
       </div>
      </div>
      
    )
  }
}
