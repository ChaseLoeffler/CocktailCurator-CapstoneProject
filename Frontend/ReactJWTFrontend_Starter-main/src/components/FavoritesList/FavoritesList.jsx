import React from "react";
import CocktailCard from "../CocktailCard/CocktailCard";

const FavoritesList = ({favorited}) => {

    const list = favorited?.map( cocktail =>(
        <div key={cocktail.idDrink}>
            <CocktailCard cocktail={cocktail}/>
        </div>
    ));


    return (
        <div>
            <div className='cocktail-grid add-margin-top'>
                {list}
            </div>
        </div>
    );
}
 
export default FavoritesList;