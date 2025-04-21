import React from 'react';
import { CornerRightUpIcon } from 'lucide-react';

export const Contact = () => {
    return (
        <div className='min-h-screen w-full max-w-3xl mt-10'>
            <h1 className='text-xl font-extrabold mb-8'>Contact</h1>
            <div className='flex flex-col items-center space-y-3'>
                <input type="email" placeholder='Email' className=" border-2 border-slate-400 rounded-sm p-2 w-11/12 max-w-96 text-md"/>
                <input type="text" placeholder='Name' className="border-2 border-slate-400 rounded-sm p-2 w-11/12 max-w-96 text-md"/>
                <textarea className='border-2 border-slate-400 rounded-sm p-2 w-11/12 max-w-96 h-52 resize-none text-md' placeholder='Message' />
                <button className='w-11/12 max-w-96 p-3 bg-gray-800 rounded-sm flex items-center justify-between cursor-pointer transition-transform duration-200 hover:scale-102'> 
                    <h1 className='text-lg  text-gray-300'>Send</h1>i wa
                    <CornerRightUpIcon className='text-lg text-gray-300' />
                </button>
            </div>
        </div>
    );
};;

