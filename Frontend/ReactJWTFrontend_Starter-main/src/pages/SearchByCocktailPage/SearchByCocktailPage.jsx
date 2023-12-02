import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchResultsList from "../../components/SearchResultsList/SearchResultsList";

const SearchByCocktailPage = (props) => {
    const [search, setSearch] = useState("")
    const [cocktailData, setData] = useState([])

    useEffect(() => {
    },[search])

    async function searchCocktailsByName(){
        try{
            let resp = await axios.get(`https://the-cocktail-db.p.rapidapi.com/search.php?s=${search}`, {
                headers: {
                  'X-RapidAPI-Key': '83fc370ec5mshfafd14dfd77a29fp100ab0jsn61bda3159568',
                  'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
                },
            });
            console.log(resp.data)
            setData(resp.data)
        }catch (err){
            console.log(err.message)
        }
    }
    function handleSumbit(e){
        e.preventDefault();
        searchCocktailsByName();
    }

    return (
        <div>
            <form onSubmit={handleSumbit}>
                <label>Search Cocktails:</label>
                <input type='text' value={search} onChange={(e)=> setSearch(e.target.value)} placeholder='Search Cocktails'/>
            </form>
            <div>
                <SearchResultsList cocktailData={cocktailData}/>
            </div>
        </div>
    );
}
 
export default SearchByCocktailPage;