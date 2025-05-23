export default function SearchSuggestion(){
    return(
        <div className="flex justify-between">
           <div className="flex items-center mt-6 ml-16">
            <p className="text-black">Also try searching for:</p>
            <a href="" className="m-1 border border-tm-orange bg-orange-50 cursor-pointer text-orange-300 px-2 rounded-xl py-1">nike*</a>
            <a href="" className="m-1 border border-tm-orange bg-orange-50 cursor-pointer text-orange-300 px-2 rounded-xl py-1">*ike</a>
           </div>
        <div className="flex items-center mr-28">
          <div className="flex border mr-5  items-center  px-3 rounded-xl cursor-pointer justify-center h-[41px] text-[#3A3A3A]">
             <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M5.83751 5.50004H14.1708L9.99584 10.75L5.83751 5.50004ZM3.54584 5.17504C5.22918 7.33337 8.33751 11.3334 8.33751 11.3334V16.3334C8.33751 16.7917 8.71251 17.1667 9.17084 17.1667H10.8375C11.2958 17.1667 11.6708 16.7917 11.6708 16.3334V11.3334C11.6708 11.3334 14.7708 7.33337 16.4542 5.17504C16.8792 4.62504 16.4875 3.83337 15.7958 3.83337H4.20418C3.51251 3.83337 3.12084 4.62504 3.54584 5.17504Z" fill="#575757"/>
             </svg>
             <p>Filter</p>
          </div>
          <div className="mr-4 cursor-pointer flex items-center justify-center ml-3">
             <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="15.5" fill="white" stroke="#C8C8C8"/>
              <path d="M20 19.4333C19.3667 19.4333 18.8 19.6833 18.3667 20.075L12.425 16.6166C12.4667 16.425 12.5 16.2333 12.5 16.0333C12.5 15.8333 12.4667 15.6416 12.425 15.45L18.3 12.025C18.75 12.4416 19.3417 12.7 20 12.7C21.3833 12.7 22.5 11.5833 22.5 10.2C22.5 8.81662 21.3833 7.69995 20 7.69995C18.6167 7.69995 17.5 8.81662 17.5 10.2C17.5 10.4 17.5333 10.5916 17.575 10.7833L11.7 14.2083C11.25 13.7916 10.6583 13.5333 10 13.5333C8.61667 13.5333 7.5 14.65 7.5 16.0333C7.5 17.4166 8.61667 18.5333 10 18.5333C10.6583 18.5333 11.25 18.275 11.7 17.8583L17.6333 21.325C17.5917 21.5 17.5667 21.6833 17.5667 21.8666C17.5667 23.2083 18.6583 24.2999 20 24.2999C21.3417 24.2999 22.4333 23.2083 22.4333 21.8666C22.4333 20.525 21.3417 19.4333 20 19.4333ZM20 9.36662C20.4583 9.36662 20.8333 9.74162 20.8333 10.2C20.8333 10.6583 20.4583 11.0333 20 11.0333C19.5417 11.0333 19.1667 10.6583 19.1667 10.2C19.1667 9.74162 19.5417 9.36662 20 9.36662ZM10 16.8666C9.54167 16.8666 9.16667 16.4916 9.16667 16.0333C9.16667 15.575 9.54167 15.2 10 15.2C10.4583 15.2 10.8333 15.575 10.8333 16.0333C10.8333 16.4916 10.4583 16.8666 10 16.8666ZM20 22.7166C19.5417 22.7166 19.1667 22.3416 19.1667 21.8833C19.1667 21.425 19.5417 21.05 20 21.05C20.4583 21.05 20.8333 21.425 20.8333 21.8833C20.8333 22.3416 20.4583 22.7166 20 22.7166Z" fill="#575757"/>
              </svg>
          </div>
          <div className="flex items-center">
             <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
             <circle cx="16" cy="16" r="15.5" fill="white" stroke="#C8C8C8"/>
             <path d="M9.5 21H14.5V19.3333H9.5V21ZM9.5 11V12.6667H24.5V11H9.5ZM9.5 16.8333H19.5V15.1667H9.5V16.8333Z" fill="#575757"/>
             </svg>

          </div>
        </div>
        </div>
    )
}