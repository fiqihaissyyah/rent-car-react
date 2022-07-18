import React from 'react'
import { useLocation } from 'react-router';

const Sidebar = () => {
    const location = useLocation();

  return (
    <div className="w-2/12 h-screen">
      <div className=" bg-[#CFD4ED] w-28 h-10 ml-8 my-4"></div>
      <p className=" text-gray-400 uppercase text-md font-bold ml-8 mt-8">{location.pathname === "/" ? "Dashboard" : "List Car"}</p>
      <p className=" text-black bg-gray-300 w-full h-10 text-md font-bold pl-8 pt-2 mt-6">{location.pathname === "/" ? "Dashboard" : "List Car"}</p>
    </div>

  )
}

export default Sidebar