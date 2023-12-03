import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Suggestions = (props) => {
    const [favDrinks, setFav] = useState();

    useEffect(() => {
        getFavorites();
    },[])

    async function getFavorites(){
        try{
            let respon = await axios.get(`https://localhost:5001/api/Favorites`,{ headers: {
                Authorization: "Bearer " + token || null,
                },
              });
              console.log(respon.data);
              setFav(respon.data);
        } catch(err){
            console.log(err.message);
        }
    }


    return (
        <div>

        </div>
    );
}
 
export default Suggestions;
