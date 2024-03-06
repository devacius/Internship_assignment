import React from 'react'
import { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type Student = {
    Id: number;
    name: string;
    phone:number,
    email:string,
    Hobbies: string;
  };

  const columnHelper = createColumnHelper<Student>();
const columns = [
  columnHelper.display({
    id:'actions',
    cell: (props) => (
      <input type="checkbox"></input>
    ),
    
  }),
  columnHelper.accessor("studentId", {
    header: "Student ID",
    type:"text",
  }),
  columnHelper.accessor("name", {
    header: "Full Name",
  }),
  columnHelper.accessor("dateOfBirth", {
    header: "Date Of Birth",
  }),
  columnHelper.accessor("major", {
    header: "Major",
  }),
  columnHelper.display({
    id:'actions',
    cell: (props) => (
      <button className='border-2 rounded border-black bg-blue-400'> Update</button>
    ),
    
  }),
  columnHelper.display({
    id:'actions',
    cell: (props) => (
      <button className='border-2 rounded border-black bg-red-400'>Delete</button>
    ),
    
  }),
  
];

const defaultData: Student[] = [
    {
      studentId: 1111,
      name: "Bahar Constantia",
      dateOfBirth: "1984-01-04",
      major: "Business",
    },
    {
      studentId: 2222,
      name: "Harold Nona",
      dateOfBirth: "1961-05-10",
      major: "Communications",
    },
    {
      studentId: 3333,
      name: "Raginolf Arnulf",
      dateOfBirth: "1991-10-12",
      major: "Business",
    },
    {
      studentId: 4444,
      name: "Marvyn Wendi",
      dateOfBirth: "1978-09-24",
      major: "Business",
    },
  ];
export default function Table() {
    const [data, setData] = useState(() => [...defaultData]);
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
      });
  return (
    <div className='border-2 rounded border-black p-3'>
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
  )
}
