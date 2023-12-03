import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CocktailDescription = ({cocktailInfo}) => {
    const [secondaryId, setId] = useState();
    const [description, setDes] = useState();
    const [secCList, setList] = useState();

    useEffect( async ()=> {
        getCocktailsList2()
        getSecondaryIdInfo();
    },[secondaryId,cocktailInfo]);
    
    async function getCocktailsList2(){
        try{
            const controller = new AbortController();
            let resp = await axios.get(`https://the-cocktail-db3.p.rapidapi.com/`, {
                headers: {
                    'X-RapidAPI-Key': '83fc370ec5mshfafd14dfd77a29fp100ab0jsn61bda3159568',
                    'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
                }
            });
            console.log(resp.data);
            setList(resp.data);
            let info = secCList?.filter(item => {
                if (item.title.toLowerCase().includes(cocktailInfo?.drinks[0]?.strDrink.toLowerCase())){
                    return true;
                }else{
                    return false;
                }
            });
            setId(info[0]?.id);
            return () => controller.abort();
        }catch(err){
            console.log(err.message)
        }
    }

    

    async function getSecondaryIdInfo(){
        try{
            const controller = new AbortController();
            let resp = await axios.get(`https://the-cocktail-db3.p.rapidapi.com/${secondaryId}`, {
                headers: {
                    'X-RapidAPI-Key': '83fc370ec5mshfafd14dfd77a29fp100ab0jsn61bda3159568',
                    'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
                }
            });
            console.log(resp.data);
            setDes(resp.data.description);
            return () => controller.abort();
        }catch(err){
            console.log(err.message)
        }
    }
    if (description == null){
        setDes("This Cocktail does not currently have a description available.")
    }
    return (
        <div>
            <div>
                <h3>Description:</h3>
            </div>
            <p>{description}</p>
        </div>
    );
}
 
export default CocktailDescription;