import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import React from 'react'
import { ActiveContextProvider } from '../contextState';

const RouterLayout = () => {
  return (
    <ActiveContextProvider>
      <div className='flex flex-col md:flex-row min-h-screen gap-x-2'>
         <Sidebar className='w-full md:w-auto'/>
         <Outlet className='flex-grow'/>  
      </div>
    </ActiveContextProvider>
  )
}

export default RouterLayout