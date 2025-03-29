import SearchBar from "./components/SearchBar"
import Tabel from "./components/Tabel";
import SearchSuggestion from "./components/SearchSuggestion";
export default function Home() {
  return (
    <div>
       <SearchBar></SearchBar>
       <p className="mr-auto h-[73px] pt-6 ml-16 my-2 font-bold text-gray-600">About 159 Trademarks found for "nike"</p>
       <div className="w-full border-gray-200 shadow border-t">
        <SearchSuggestion></SearchSuggestion>
        <Tabel></Tabel>
       
       </div>
    </div>
    
  );
}
