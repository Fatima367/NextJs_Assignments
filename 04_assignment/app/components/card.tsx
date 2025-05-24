import Image from 'next/image'
import React from 'react'

export default function Card(props : Readonly<{name :string, rollno :number, day:string}>) {
  return (
    <div>
      <div className='w-max h-auto shadow-lg flex p-8 max-w-md ring-2 ring-cyan-200
      bg-white hover:shadow-2xl rounded-sm'>
        <div className='flex flex-grow flex-col justify-center -ml-2 -mb-2 -mt-1'>
            <h1 className='text-2xl font-bold text-blue-800 space-y-3'>Student Card</h1>
            <br />
            <div className='flex flex-row -mt-3'>
            <h2 className='font-bold text-blue-500'>Name: </h2><span className='ml-2'> {props.name}</span>
            </div>
            <div className='flex flex-row'>
            <h2 className='font-bold text-blue-500'>Roll No: </h2><span className='ml-2'>{props.rollno}</span>
            </div>
            
            <div className='flex flex-row'>
            <h2 className='font-bold text-blue-500'>Distance Learning:</h2> <span className='ml-2'>No</span>
            </div>
            <div className='flex flex-row'>
            <h2 className='font-bold text-blue-500'>City:</h2> <span className='ml-2'>Karachi</span>
            </div>
            <div className='flex flex-row w-max'>
            <h2 className='font-bold text-blue-500'>Center:</h2> <span className='ml-2'>Governor House Karachi</span>
            </div>
            <div className='flex flex-row'>
            <h2 className='font-bold text-blue-500'>Day/Time:</h2> <span className='ml-2'>{props.day}</span>
            </div>
            <div className='flex flex-row'>
            <h2 className='font-bold text-blue-500'>Batch:</h2> <span className='ml-2'>1</span>
            </div>
            <br />
            <button className='bg-blue-800 bg-opacity-80 rounded-md w-full text-white cursor-default'>
              Q1 & WMD</button>
            
        </div>
        <div className='h-32 w-32 flex-shrink-0 ml-8 ring-2 ring-gray-200 mt-6'>
          <Image
          src={"/"}
          width={32}
          height={32}
          alt='profile image'
          className='object-cover w-full h-full hover:shadow-lg' />
          <br />
          <div >    
            <br />     
            <hr />
            <h2 className='font-bold text-blue-500 mt-2 text-center '>Authorized</h2>
            <h2 className='font-bold text-blue-500 text-center'>Signature</h2>
            </div>
        </div>
      </div>
    </div>
  )
}
