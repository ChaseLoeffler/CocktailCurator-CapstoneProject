import React from 'react'
import './CocktailCard.css'
import { Link } from 'react-router-dom'



const CocktailCard = ({cocktail}) => {
  return (
    <article className='cocktail-card'>
        <Link to={`/CocktailDetails/${cocktail.idDrink || cocktail.cocktailId}`}>
            <img src={cocktail.strDrinkThumb || cocktail.thumbnailUrl} alt='Picture of Cocktail' width={250} height={250}/>
            <h4 className='name-looks'>{cocktail.strDrink || cocktail.name}</h4>
        </Link>
    </article>
  )
}

export default CocktailCard