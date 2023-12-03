import React, { useState, useEffect } from "react";
import axios from "axios";

const FavoriteButton = ({cocktailId,cocktailInfo,token}) => {
  const [isToggled, setToggled] = useState(false)
  const [favId, setId] = useState()

    useEffect(()=> {
        axios.get(`https://localhost:5001/api/CocktailDetails/${cocktailId}`, {headers : {Authorization: "Bearer " + token || null,}})
        .then(response => {
            setToggled(response.data.cocktailFavorited);
        })
        .catch(error => {
            console.log(error);
        });
    },[cocktailId])

    useEffect(()=> {
        getFavoritesId();
    },[])


    async function addToFavorites(dataStructure){
     try{
          let respon = await axios.post(`https://localhost:5001/api/Favorites`, dataStructure,{ headers: {
                Authorization: "Bearer " + token || null,
                },
            });
            console.log(respon);
            window.location.reload();
        } catch(err){
         console.log(err.message);
        }
    }

    async function removeFromFavorites(Id){
        try{
            let respon = await axios.delete(`https://localhost:5001/api/Favorites/${Id}`,{ headers: {
               Authorization: "Bearer " + token || null,
                },
           });
              console.log(respon);
              window.location.reload();
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
              console.log(favId)
        } catch(err){
            console.log(err.message);
        }
    }

  const handleClick = () => {
    if(isToggled===false){
        let newEntry ={
            cocktailId:`${cocktailId}`,
            name: `${cocktailInfo?.drinks[0]?.strDrink}`,
            thumbnailUrl: `${cocktailInfo?.drinks[0]?.strDrinkThumb}`
        }
        addToFavorites(newEntry);
        setToggled(true)
    }
    if(isToggled===true){
        removeFromFavorites(favId);
        setToggled(false)
    }
  };
    

  return (
    <button onClick={handleClick}>
      {isToggled ? "Unfavorite" : "Favorite"}
    </button>
  );
}

export default FavoriteButton;