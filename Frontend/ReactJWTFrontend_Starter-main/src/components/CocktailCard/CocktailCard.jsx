import React from 'react'
import './CocktailCard.css'
import { Link } from 'react-router-dom'



const CocktailCard = ({cocktail}) => {
  return (
    <article className='cocktail-card'>
        <Link to={`/CocktailDetails/${cocktail.idDrink}`}>
            <img src={cocktail.strDrinkThumb} width={250} height={250}/>
            <div>
                <h4 className='name-looks'>{cocktail.strDrink}</h4>
            </div>
        </Link>
    </article>
  )
}

export default CocktailCard