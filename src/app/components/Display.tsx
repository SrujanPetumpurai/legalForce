'use client'
import { useState } from "react";

export default function Display() {
  const [view, setView] = useState(true);

  return (
    <div className="mt-6 text-black flex flex-col justify-around border border-gray-100 bg-white rounded-lg  w-[286px] h-[121px] p-4">
      <h2 className="font-bold">Display</h2>
      <div className="mt-3 rounded-2xl bg-gray-100 items-center justify-center flex">
        <span 
          onClick={() => setView(true)} 
          className={`m-2 flex-1 text-center py-2 cursor-pointer ${view ? 'bg-white' : 'bg-gray-100'}`}>Grid View</span>
        <span 
          onClick={() => setView(false)} 
          className={`m-2 flex-1 text-center py-2 cursor-pointer ${!view ? 'bg-white' : 'bg-gray-100'}`}> List View</span>
      </div>
    </div>
  );
}
