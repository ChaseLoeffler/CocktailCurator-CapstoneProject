import React from 'react'
import './CocktailCard.css'
import { Link } from 'react-router-dom'



const CocktailCard = ({cocktail}) => {
  return (
    <article className='cocktail-card'>
        <Link to={`/CocktailDetails/${cocktail.idDrink}`} className=''>
            <img src={cocktail.strDrinkThumb} alt='Picture of Cocktail' width={250} height={250}/>
            <h4 className='name-looks'>{cocktail.strDrink}</h4>
        </Link>
    </article>
  )
}

export default CocktailCard