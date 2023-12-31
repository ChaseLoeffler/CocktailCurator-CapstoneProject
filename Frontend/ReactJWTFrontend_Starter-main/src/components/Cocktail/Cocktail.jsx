import React from 'react';
import IngredientsList from "../../components/IngredientsList/IngredientList";
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import CocktailDescription from '../CocktailDescription/CocktailDescription';
import "./Cocktail.css"



const Cocktail = ({cocktailId,token,cocktailInfo,cocktailCommentsData}) => {

    return ( 
        <div>
            <div className='cocktail-flex'>
                <div>
                    <div>
                        <img src ={cocktailInfo?.drinks[0]?.strDrinkThumb} className='cocktail-img'/>
                    </div>

                    <div className='title-container'>
                        <h2>{cocktailInfo?.drinks[0]?.strDrink}</h2>
                        <div>
                            <FavoriteButton cocktailId={cocktailId} cocktailInfo={cocktailInfo} token={token}/>
                        </div>
                    </div>
                    <div>
                        <h3>Average User Rating : {`${cocktailCommentsData?.averageRating}⭐'s`}</h3>
                    </div>
                    <div className='discription-width'>
                        <CocktailDescription cocktailInfo={cocktailInfo}/>
                    </div>
                </div>
                

                <div className='discription-width'>
                    <div>
                        <h3>Ingredients:</h3>
                        <IngredientsList cocktailInfo={cocktailInfo}/>
                    <div>

                    </div>
                        <h3>Instructions:</h3>
                        <p>{cocktailInfo?.drinks[0]?.strInstructions}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Cocktail;
