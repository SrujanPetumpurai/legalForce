'use client'
import { useState } from "react"
import FilterSelectBtn from "./FilterSelectBtn";
export default function Profession(){
    const [user,setUser] = useState('Owners');
    const onSelection = (user:string)=>{
        setUser(user)
    }
    const IncNames = ['Tesla,Inc.','LEGALFORCE RAPC.','SpaceX Inc.','SpaceX Inc.']
    const onCurrent = (current:string)=>{
       return user ==current?'underline font-bold text-black underline-offset-6 ' : 'text-black font-thin'
    }
    
    return(
        <div className=" flex flex-col w-[286px] rounded-xl mt-3 border p-4 items-center  bg-white h-[315px]"> 
           <div className="flex">
              <span onClick={() => onSelection('Owners')} className={`${onCurrent('Owners')} mr-4 `}>
                Owners
              </span>
              <span onClick={() => onSelection('LawFirms')} className={`${onCurrent('LawFirms')} mr-4 `}>
                Law Firms
              </span>
              <span onClick={() => onSelection('Attorneys')} className={`${onCurrent('Attorneys')} `}>
                Attorneys
              </span>
            </div>

           <div className="mt-6 flex rounded-lg w-[260px] border border-gray-500 p-2 pr-8">
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.6804 18.3402L13.7421 14.3949M15.9246 9.12208C15.9246 11.1012 15.1384 12.9993 13.7389 14.3987C12.3395 15.7982 10.4414 16.5844 8.46229 16.5844C6.48317 16.5844 4.58511 15.7982 3.18566 14.3987C1.7862 12.9993 1 11.1012 1 9.12208C1 7.14296 1.7862 5.2449 3.18566 3.84545C4.58511 2.44599 6.48317 1.65979 8.46229 1.65979C10.4414 1.65979 12.3395 2.44599 13.7389 3.84545C15.1384 5.2449 15.9246 7.14296 15.9246 9.12208V9.12208Z" stroke="#636363" stroke-width="1.75583" stroke-linecap="round"/>
                </svg>
            <input  placeholder={`Search ${user}`}className="placeholder-gray-500" type="text" />
           </div>
           <div className="w-full h-[100px] flex flex-col justify-start">
            {IncNames.map((name,idx)=>
            <FilterSelectBtn key={idx} label={name}></FilterSelectBtn>
            )}
           </div>
        </div>
    )
}