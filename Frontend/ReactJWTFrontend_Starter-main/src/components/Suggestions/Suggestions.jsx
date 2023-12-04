import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CocktailCard from '../CocktailCard/CocktailCard';



const Suggestions = ({token}) => {
    const [favDrinks, setFav] = useState();
    const [cocData, setData] = useState();
    const [listOfCData, setLData] = useState();
    const [randomC, setRan] =useState();

    useEffect(() => {
        getFavorites();
    },[])

    useEffect(() => {
        favoritesIngredients();
    },[favDrinks])

    // useEffect(()=>{
    //     getRandomCocktails();
    // },[])



    async function getFavorites(){
        try{
            let respon = await axios.get(`https://localhost:5001/api/Favorites`,{ headers: {
                Authorization: "Bearer " + token || null,
                },
            });
            console.log("this is list of favorites",respon.data);
            setFav(respon.data);
        } catch(err){
            console.log(err.message);
        }
    }


    async function favoritesIngredients(){
        let list = []
        for (const item in favDrinks){
            await cocktailDetails(item.cocktailId);
            list.push(cocData)
        }
        setLData(list);
        console.log("This is the favorites Cocktail Info passed into cocktailDetails",listOfCData)
    }



    async function cocktailDetails(Id){
        try{
            const controller = new AbortController();
            let response = await axios.get(`https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${Id}`, {
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

    async function findRecomendations(){
    }

    async function getRandomCocktails(){
        try{
            const controller = new AbortController();
            let response = await axios.get(`https://the-cocktail-db.p.rapidapi.com/randomselection.php`, {
              headers: {
                'X-RapidAPI-Key': '83fc370ec5mshfafd14dfd77a29fp100ab0jsn61bda3159568',
                'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
              },
            });
            console.log(response.data)
            setRan(response.data)
            return () => controller.abort();
        } catch (err) {
            console.log(err.message)
        }
    }

    function makeToList(array){
        const list = array?.drinks?.map((cocktail) => (
            <div key={cocktail.idDrink}>
                <CocktailCard cocktail={cocktail}/>
            </div>
        ));
        return list;
    }

    const list = makeToList(randomC)

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
