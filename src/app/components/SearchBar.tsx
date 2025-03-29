export default function SearchBar(){
    return(
        <div className="flex h-[132px] w-full  px-5 !px-0 md:px-5 text-tm-gray sticky top-0 font-semibold !bg-[#f9fbfe] border-b shadow-none z-[51]">
            <div className="size-42 ml-12 pt-8">
                <img  src="https://www.trademarkia.com/_next/image?url=%2Fassets%2Fimages%2Flogo_trademarkia.png&w=384&q=75" alt="" />
            </div>
            <div>
                <form className="flex items-center" >
                    <div className="flex mt-4 ml-16 flex-1 border-[0.5px] bg-white p-2 pr-3 rounded-[14px] items-center justify-between gap-x-2 max-h-[56px] border-gray-300 flex w-[728.8px] h-[56px]">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="hidden md:flex h-5 w-5 text-gray-400 ml-2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                      </div>    
                   <div>
                   <input placeholder="Search for Trademarks" className=" flex-1 border-0 text-gray-400 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base" type="text" />
                   </div>
                   <div>
                    <img src="https://www.trademarkia.com/_next/image?url=%2Fassets%2Fimages%2Fcamera_icon.png&w=1920&q=75" alt="" />
                   </div>
                   </div>
                   <div className="pt-4">
                    <button className=" py-6  px-8 md:py-3.5 md:px-8 font-bold flex items-center justify-center rounded-2xl relative overflow-hidden h-[54px] disabled:bg-tm-gray-300 disabled:hover:bg-tm-gray-300 disabled:border-tm-gray-300 disabled:!cursor-not-allowed focus-visible:outline-none h-[50px] ml-3 md:block hidden  border border-solid border-tm-blue bg-blue-500 hover:bg-blue-300 active:bg-blue-200 text-white ">Search</button>
                   </div>
                </form>
            </div>
            <div className="text-black">
 
            </div>
            </div>
           )

}