import React, { useEffect } from 'react'
import { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import Frombutton from '../components/Frombutton';
import Formupdatebutton from '../components/Formupdatebutton';
import FormDeleteButton from '../components/FormDeleteButton';

type Student = {
    ID: number;
    name: string;
    phoneno:number,
    email:string,
    hobbies: string;
  };

  const columnHelper = createColumnHelper<Student>();
const columns = [
  columnHelper.display({
    id:'actions',
    cell: () => (
      <input type="checkbox"></input>
    ),
    
  }),
  columnHelper.accessor("ID", {
    header: "ID",
  }),
  columnHelper.accessor("name", {
    header: " Name",
  }),
  columnHelper.accessor("phoneno", {
    header: "Phone No.",
  }),
  columnHelper.accessor("email", {
    header: "Email",
  }),
  columnHelper.accessor("hobbies",{
    header:"Hobbies",
  }),
  columnHelper.display({
    id:'actions',
    cell: () => (
      <Formupdatebutton/>
    ),
    
  }),
  columnHelper.display({
    id:'actions',
    cell: () => (
      <FormDeleteButton/>
    ),
    
  }),
  
];

const defaultData: Student[] = [
    {
      ID: 1111,
      name: "Bahar Constantia",
      phoneno: 23123,
      email: "shit@gmail.com",
      hobbies:"shit is easy to do",
    },
   
   
  ];


 
export default function Table() {
  //const navigate=useNavigate();
    const [data, setData] = useState(() => [...defaultData]);
    useEffect(() => {
      axios.get<Student[]>("http://localhost:3000/api/v1/user/getdata")
        .then((res) => setData(res.data))
        .catch((err)=>{
          console.log(err);
        })
    
    }, [data]);
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
      });
  return (
    <div className='border-2 rounded border-black p-3 flex flex-col justify-center relative pb-10'>
      <div>
        <table >
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} >
            {headerGroup.headers.map((header) => (
              <th key={header.id} >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>   {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className='border-2 p-4 my-2'>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}</tbody>
        </table>
        </div>
      <div className='w-24 relative left-80 pt-2'>{<Frombutton/>}</div>
    </div>
  )
}
