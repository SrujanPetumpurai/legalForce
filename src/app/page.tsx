import SearchBar from "./components/SearchBar"
import Tabel from "./components/Tabel";
import StatusFilter from "./components/StatusFilter";
import SearchSuggestion from "./components/SearchSuggestion";
export default function Home() {
  return (
    <div>
       <SearchBar></SearchBar>
       <div className="flex justify-between items-center">
        <p className="mr-auto h-[73px] pt-6 ml-16 my-2 font-bold text-gray-600">About 159 Trademarks found for "nike"</p>
       </div>
       <div className="w-full border-gray-200 shadow border-t">
        <SearchSuggestion></SearchSuggestion>
        <div className="flex">
        <Tabel></Tabel>
        <StatusFilter></StatusFilter>
        </div>
       </div>
    </div>
    
  );
}
