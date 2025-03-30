import FilterBtn from "./FilterBtn"
import Profession from "./Profession"
import Display from "./Display"
export default function StatusFilter(){
    return(
           <div className="flex flex-col ml-28">
            <div className="w-[296px] h-[161px] bg-white rounded-lg border shadow  pt-4 pl-4 mt-8">
            <h2 className="font-bold text-black">Status</h2>
            <div className="text-black">  
                <button className="border rounded-lg border-gray-300 px-3 mr-2 mb-2 py-2">All</button>
                <FilterBtn color="bg-green-500" label="Registered"></FilterBtn>
                <FilterBtn color="bg-yellow-500" label="pending"></FilterBtn>
                <FilterBtn color="bg-red-500" label="Abandoned"></FilterBtn>
                <FilterBtn color="bg-blue-500" label="Others"></FilterBtn>
                {/* <FilterBtn color="bg-green-500" label="Registered"></FilterBtn> */}
            </div>
          </div>
          <Profession></Profession>
          <Display></Display>
        </div>
    )
}