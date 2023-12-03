import React, { useState, useEffect } from 'react';
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [user, token] = useAuth();
  const [popularC, setPop] =useState([]);

  useEffect(()=>{
    fetchPop();
  }, [token]);

  const fetchPop = async () => {
    try{
      let response = await axios.get(`https://the-cocktail-db.p.rapidapi.com/popular.php`, {
        headers: {
          'X-RapidAPI-Key': '83fc370ec5mshfafd14dfd77a29fp100ab0jsn61bda3159568',
          'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
        },
      });
      setPop(response.data)
    } catch (err) {
      console.log(err.message)
    }
  };

  const popularList = popularC?.drinks?.map((cocktail) => (
    <div key={cocktail.idDrink}>
      <p><Link to={`/CocktailDetails/${cocktail.idDrink}`}><img src={cocktail.strDrinkThumb}/>{cocktail.strDrink}</Link></p>
    </div>
  ));

  return (
    <div className="container">
      {console.log(user)}
      <h1>Welcome to Cocktail Curator {user.userName}!</h1>
      <p>Here you can find Popular cocktails to check out as well as cocktails suggestions based on your favorites and ratings.</p>
      <h2>Popular Cocktails</h2>
      <div>{popularList}</div>
      <h2>Suggested Cocktails</h2>
      
    </div>
  );
};

export default HomePage;
