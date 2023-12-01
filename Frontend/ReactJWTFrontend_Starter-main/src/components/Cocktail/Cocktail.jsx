import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IngredientsList from "../../components/IngredientsList/IngredientList";





const Cocktail = ({cocktailId,token,cocktailInfo}) => {
    const [favorited,setFav] = useState()
    const [favId, setId] = useState()

    useEffect(() =>{
        isFavorited();
    },[])

    async function isFavorited(){
        try{
            let resp = await axios.get(`https://localhost:5001/api/CocktailDetails/${cocktailId}`, {headers : {
                Authorization: "Bearer " + token || null,
            },});
            console.log(resp.data);
            setFav(resp.data)
        } catch (err){
            console.log(err.message);
        }
    }

    async function addToFavorites(dataStructure){
        try{
            let respon = await axios.post(`https://localhost:5001/api/Favorites`, dataStructure,{ headers: {
                Authorization: "Bearer " + token || null,
                },
              });
              console.log(respon);
        } catch(err){
            console.log(err.message);
        }
    }

    async function removeFromFavorites(favId){
        try{
            let respon = await axios.delete(`https://localhost:5001/api/Favorites/${favId}`,{ headers: {
                Authorization: "Bearer " + token || null,
                },
              });
              console.log(respon);
        } catch(err){
            console.log(err.message);
        }
    }

    async function getFavoritesId(){
        try{
            let respon = await axios.get(`https://localhost:5001/api/Favorites`,{ headers: {
                Authorization: "Bearer " + token || null,
                },
              });
              console.log(respon.data);
              const favData = respon.data?.filter(fav => {
                if (fav.cocktailId === cocktailId){
                    return true;
                }else{
                    return false;
                }
              });
              console.log(favData);
              setId(favData[0].id);
        } catch(err){
            console.log(err.message);
        }
    }


    return ( 
        <div>
            <div>
                <div>
                    <img src ={cocktailInfo?.drinks[0]?.strDrinkThumb}/>
                </div>
                <h3>{cocktailInfo?.drinks[0]?.strDrink}</h3>
                <h4>Ingredients:</h4>
                <div>
                    <IngredientsList cocktailInfo={cocktailInfo}/>
                </div>
                <p></p>
            </div>
        </div>
    );
}
 
export default Cocktail;
