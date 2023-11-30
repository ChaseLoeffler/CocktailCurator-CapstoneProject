import React from "react";
import { Link } from 'react-router-dom';

const FavoritesList = ({favorited}) => {

    const list = favorited?.map( favorite =>(
        
        <li key={favorite?.id}>
            <img src={favorite?.thumbnailUrl}/>
            <Link to={`/CocktailDetails/${favorite?.cocktailId}`}>{favorite?.name}</Link>
        </li>
       
    ));


    return (
        <div>
            <div>
                {list}
            </div>
        </div>
    );
}
 
export default FavoritesList;