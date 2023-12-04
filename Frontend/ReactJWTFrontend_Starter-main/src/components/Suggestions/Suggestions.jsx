import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CocktailCard from '../CocktailCard/CocktailCard';



const Suggestions = ({token}) => {
    const [ingre, setIngre] = useState();
    const [cocData, setData] = useState();
    const [randomC, setRan] =useState();
    
    useEffect(() => {
        getFavoritesIngredients();
        
    },[])
    
    useEffect(()=>{
        MakeRecomendedList();
    },[ingre])
    
    // useEffect(()=>{
    //    makeRanSuggest();
    // },[])




    async function getFavoritesIngredients(){
        try{
            let respon = await axios.get(`https://localhost:5001/api/Favorites/WithIngredients`,{ headers: {
                Authorization: "Bearer " + token || null,
                },
            });
            console.log("this is list of favorites with ingredients",respon.data);
            setIngre(respon.data);
        } catch(err){
            console.log(err.message);
        }
    }

    
    async function GetCocktailsWithSameIngredients(names){
        try{
            const controller = new AbortController();
            let response = await axios.get(`https://the-cocktail-db.p.rapidapi.com/filter.php?i=${names}`, {
              headers: {
                'X-RapidAPI-Key': '83fc370ec5mshfafd14dfd77a29fp100ab0jsn61bda3159568',
                'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
              },
            });
            console.log(response.data);
            setData(response.data);
            return () => controller.abort();
        } catch (err) {
            console.log(err.message)
        }
    }

    function MakeRecomendedList(){
        ingre?.map((el)=>(
            GetCocktailsWithSameIngredients(el?.ingredients)
        ));
    }
    

    function makeToList(array){
        const list = array?.drinks?.map((cocktail) => (
            <div key={cocktail.idDrink}>
                <CocktailCard cocktail={cocktail}/>
            </div>
        ));
        return list;
    }

    // function makeRanSuggest(){
    //     const tenRandomSuggestions = [];
    //     for (let i = 0; i < 10; i++){
    //     const randomIndex = Math.floor(Math.random() * cocData?.length);
    //     tenRandomSuggestions?.push(cocData[randomIndex])}
    //     return tenRandomSuggestions;
    // }

    const list = makeToList(cocData)?.slice(0,10);

    return (
        <section className='add-margin-top'>
            <h2 className='add_text-decoration'>Suggested Cocktails</h2>
            <div className='cocktail-grid'>
                {list}
            </div>
        </section>
    );
}
 
export default Suggestions;
