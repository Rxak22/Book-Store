import React from 'react'
import { FolderIcon } from '@heroicons/react/24/solid'

const Footer = () => {
  return (
    <div className='w-full h-[40vh] bg-teal-700 px-10'>
        <div className='w-full h-12 flex justify-center items-center'>
            <h1 className='font-bold text-lg text-slate-200 font-tahoma tracking-widest'>MyBook Your Future</h1>
        </div>
        <div className='w-full mt-5 h-auto grid grid-cols-3 gap-5'>
            <div>
                <h1 className='text-center pb-3 text-slate-200 text-md font-bold'>About US</h1>
                <p className='text-slate-300'>hello kon papa kon kon na nv sl papa klas</p>
                <p className='text-slate-300'>hello kon papa kon kon na nv sl papa klas</p>
                <p className='text-slate-300'>hello kon papa kon kon na nv sl papa klas</p>
            </div>
            <div className='border-x-2 border-red-700 px-2'>
                <h1 className='text-center pb-3 text-slate-200 text-md font-bold'>Infomation</h1>
                <p className='text-slate-300 flex hover:underline'><FolderIcon className='w-5 mr-2' /> Facebook</p>
                <p className='text-slate-300 flex hover:underline'><FolderIcon className='w-5 mr-2' /> Youtube</p>
            </div>
            <div>
                <h1 className='text-center pb-3 text-slate-200 text-md font-bold'>Contact</h1>
                <p className='text-slate-300 text-right'>dubai</p>
                <p className='text-slate-300 text-right hover:underline'>therakk168@gmamil.com</p>
            </div>
        </div>
        <div className='w-full flex justify-center mt-12 py-3'>
            <h1 className='text-white '>Copyright Reverse @ <span className='hover:underline'>TheRakk</span></h1>
        </div>
    </div>
  )
}

export default Footer