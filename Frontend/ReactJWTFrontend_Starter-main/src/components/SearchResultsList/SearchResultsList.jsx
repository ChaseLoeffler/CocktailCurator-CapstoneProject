import React from 'react';
import CocktailCard from '../CocktailCard/CocktailCard';

const SearchResultsList = ({cocktailData}) => {

    if (cocktailData.drinks === 'None Found'){
        cocktailData.drinks = null
    }

    let list = cocktailData?.drinks?.map(cocktail =>(
        <div key={cocktail.idDrink}>
            <CocktailCard cocktail={cocktail}/>
        </div>
    ));

    if (list === null || cocktailData.drinks === null){
       list = <p></p>
    }

    return list ?(
        <div className='cocktail-grid add-margin-top'>
            {list}
        </div>
    ): null;
}

export default SearchResultsList;