import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Suggestions = (props) => {
    const [favDrinks, setFav] = useState();
    const [cocktailInfo,setInfo] = useState();
    const [userComs, setComs] = useState();

    useEffect(() => {
        getFavorites();
        getUserComments();
    },[],[])

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

    async function cocktailDetails(cId){
        try{
            const controller = new AbortController();
            let response = await axios.get(`https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${cId}`, {
              headers: {
                'X-RapidAPI-Key': '83fc370ec5mshfafd14dfd77a29fp100ab0jsn61bda3159568',
                'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
              },
            });
            console.log(response.data)
            setInfo(response.data)
            return () => controller.abort();
        } catch (err) {
            console.log(err.message)
        }
    }

    async function getUserComments(){
        try{
            const controller = new AbortController();
            let resp = await axios.get(`https://localhost:5001/api/Comments`, {headers: {
                Authorization: "Bearer " + token || null
            }});
            console.log(resp.data)
            setComs(resp.data)
            return () => controller.abort();
        }catch(err){
            console.log(err.message);
        }
    }

    return (
        <div>

        </div>
    );
}
 
export default Suggestions;
