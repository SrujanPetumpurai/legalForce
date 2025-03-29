export default function Status(){
    return(
        <div className="w-[168px] text-black  h-[160px] flex flex-col gap-12 py-4 ">
            <div>
                <div className="flex items-center">
                    <div className=" inline-block h-2 w-2 rounded-full bg-green-500 "></div>
                    <span className="text-green-500 font-semibold ml-2">Live/Registered</span>
                </div>
                <p className="text-xs">
                    on <b> 26 Jun 2020</b>
                </p>
            </div>
            <div className="flex ">
                           <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M14.0308 11.7612C14.0227 11.7888 14.0143 11.8073 14.0055 11.8167C13.2175 13.1904 12.1259 14.1705 10.7308 14.7573C9.33566 15.344 7.88277 15.4149 6.37209 14.9699C5.56713 14.7329 4.83301 14.3519 4.16974 13.827C3.50647 13.3021 2.96269 12.6716 2.53839 11.9354L1.15732 12.6881C1.02171 12.762 0.882234 12.7778 0.738885 12.7356C0.595536 12.6934 0.486911 12.6045 0.413009 12.4689C0.339107 12.3332 0.323267 12.1938 0.365487 12.0504L1.45672 8.3454C1.49894 8.20205 1.58785 8.09342 1.72346 8.01952C1.85907 7.94562 1.99855 7.92978 2.1419 7.972L5.84692 9.06323C5.99027 9.10545 6.09889 9.19437 6.1728 9.32997C6.2467 9.46558 6.26254 9.60506 6.22032 9.74841C6.1781 9.89176 6.08918 10.0004 5.95357 10.0743L4.48686 10.8736C4.77114 11.3528 5.13216 11.7647 5.5699 12.1093C6.00765 12.4539 6.49393 12.705 7.02873 12.8625C7.76753 13.0801 8.50948 13.1039 9.25459 12.9339C9.9997 12.7639 10.6578 12.4215 11.2288 11.9066C11.3171 11.8307 11.5582 11.5512 11.9521 11.0681C12.0336 10.9543 12.135 10.9152 12.2563 10.951L13.8441 11.4186C13.9158 11.4397 13.9701 11.4842 14.0071 11.552C14.044 11.6198 14.0519 11.6896 14.0308 11.7612ZM16.1862 5.20601L15.095 8.91103C15.0528 9.05438 14.9639 9.16301 14.8282 9.23691C14.6926 9.31081 14.5532 9.32665 14.4098 9.28443L10.7048 8.1932C10.5614 8.15098 10.4528 8.06206 10.3789 7.92646C10.305 7.79085 10.2892 7.65137 10.3314 7.50802C10.3736 7.36467 10.4625 7.25605 10.5981 7.18214L12.0756 6.377C11.482 5.38133 10.6312 4.7203 9.52298 4.39391C8.78418 4.17631 8.04223 4.15251 7.29712 4.32252C6.55201 4.49252 5.89393 4.83496 5.32287 5.34982C5.23461 5.42568 4.99351 5.70518 4.59956 6.18833C4.51811 6.30214 4.41673 6.34119 4.29543 6.30546L2.64968 5.82074C2.578 5.79963 2.52369 5.75518 2.48674 5.68737C2.44979 5.61957 2.44187 5.54983 2.46298 5.47815L2.48003 5.42026C3.2736 4.04822 4.37069 3.06965 5.77131 2.48455C7.17194 1.89946 8.63035 1.83019 10.1465 2.27675C10.9515 2.51383 11.6893 2.89742 12.3601 3.42751C13.0308 3.95759 13.5791 4.58794 14.0051 5.31855L15.3944 4.56836C15.53 4.49445 15.6695 4.47861 15.8128 4.52083C15.9562 4.56305 16.0648 4.65197 16.1387 4.78758C16.2126 4.92318 16.2284 5.06266 16.1862 5.20601Z" fill="#EC4A4A"/>
               </svg>
             <p className="ml-2 font-bold text-xs">26 Dec 2027</p>
            </div>
        </div>
    )
}