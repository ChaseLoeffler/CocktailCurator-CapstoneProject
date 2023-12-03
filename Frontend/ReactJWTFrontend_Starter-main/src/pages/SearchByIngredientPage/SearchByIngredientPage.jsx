import React, { useEffect, useState } from "react";
import Select from "react-select"
import axios from "axios";
import SearchResultsList from "../../components/SearchResultsList/SearchResultsList";


const SearchByIngredientsPage = (props) => {
    const [search, setSearch] = useState()
    const [cocktailData, setData] = useState([])
    const [options, setOptions] = useState([])

    useEffect(() => {
        getIngredients();
    },[])

    useEffect(() => {
        searchCocktailsByIngredient();
    },[search])

    async function searchCocktailsByIngredient(){
        try{
            let resp = await axios.get(`https://the-cocktail-db.p.rapidapi.com/filter.php?i=${search}`, {
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

    async function getIngredients() {
        try{
            let resp = await axios.get(`https://www.thecocktaildb.com/api/json/v2/1/list.php?i=list`);
            console.log(resp.data);
            let tempArr = []
            resp.data.drinks.forEach((drink) =>{
                tempArr.push({
                    label: drink.strIngredient1,
                    value: drink.strIngredient1
                })
            })
            setOptions(tempArr);
        }catch (err){
            console.log(err.message)
        }
    }
    
    const handleChange = (selctedOption) => {
        console.log("HandlingChange",selctedOption)
        setSearch(selctedOption.value);
    }


    
    return (
        <div>
        <Select options={options} onChange={handleChange} placeholder={"Search By Ingredent"}/>
        <div>
            <SearchResultsList cocktailData={cocktailData}/>
        </div>
    </div>
    );
}
 
export default SearchByIngredientsPage;