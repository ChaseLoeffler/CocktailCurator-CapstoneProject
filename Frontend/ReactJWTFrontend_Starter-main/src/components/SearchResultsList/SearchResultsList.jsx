import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultsList = ({cocktailData}) => {

    if (cocktailData.drinks === 'None Found'){
        cocktailData.drinks = null
    }

    let list = cocktailData?.drinks?.map(cocktail =>(
        <ul key={cocktail?.idDrink}>
            <li><Link to={`/CocktailDetails/${cocktail?.idDrink}`}><img src={cocktail?.strDrinkThumb}/>{cocktail?.strDrink}</Link></li>
        </ul>
    ));

    if (list === null || cocktailData.drinks === null){
       list = <p></p>
    }

    return list ?(
        <div>
            {list}
        </div>
    ): null;
}

export default SearchResultsList;