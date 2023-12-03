import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IngredientsList from "../../components/IngredientsList/IngredientList";
import FavoriteButton from '../FavoriteButton/FavoriteButton';





const Cocktail = ({cocktailId,token,cocktailInfo}) => {

    return ( 
        <div>
            <div>
                <div>
                    <img src ={cocktailInfo?.drinks[0]?.strDrinkThumb}/>
                </div>
                <h2>{cocktailInfo?.drinks[0]?.strDrink}</h2>
                <div>
                    <FavoriteButton cocktailId={cocktailId} cocktailInfo={cocktailInfo} token={token}/>
                </div>
                <div>
                <h4>Ingredients:</h4>
                <div>
                    <IngredientsList cocktailInfo={cocktailInfo}/>
                </div>
                <h4>Instructions:</h4>
                <p>{cocktailInfo?.drinks[0]?.strInstructions}</p>
                </div>
            </div>
        </div>
    );
}
 
export default Cocktail;
