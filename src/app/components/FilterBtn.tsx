export default function FilterBtn({color,label}:{color:string,label:string}){
    return(
            <button className="border rounded-xl border-gray-300 p-2 mb-2 mr-2">
                <span className={`mr-2 inline-block w-2 ${color} h-2 rounded-full`}></span>
                {label}
            </button>
    )
}