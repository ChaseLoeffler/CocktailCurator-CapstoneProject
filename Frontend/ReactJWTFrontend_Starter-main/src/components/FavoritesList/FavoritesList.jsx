import React from "react";
import { Link } from 'react-router-dom';

const FavoritesList = ({favorited}) => {

    const list = favorited?.map( favorite =>(
        
        <li key={favorite?.id}>
            <Link to={`/CocktailDetails/${favorite?.cocktailId}`}><img src={favorite?.thumbnailUrl}/>{favorite?.name}</Link>
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