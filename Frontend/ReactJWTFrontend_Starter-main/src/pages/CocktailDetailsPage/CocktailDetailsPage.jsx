import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cocktail from '../../components/Cocktail/Cocktail';
import CommentList from '../../components/CommentList/CommentList'
import CommentForm from '../../components/CommentForm/CommentForm'
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const CocktailDetailsPage = (props) => {
    const {cocktailId} = useParams();
    const [user,token] =useAuth();
    const [cocktailCommentsData, setData] = useState();
    const [cocktailInfo,setInfo] = useState();

    useEffect(() => {
        cocktailDetails();
        getComments();
    },[],[])

    async function cocktailDetails(){
        try{
            const controller = new AbortController();
            let response = await axios.get(`https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${cocktailId}`, {
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

    async function getComments(){
        try {
            const controller = new AbortController();
            let resp = await axios.get(`https://localhost:5001/api/CocktailDetails/${cocktailId}`,{ headers: {
                Authorization: "Bearer " + token || null
            }});
            console.log(resp.data);
            setData(resp.data);
            return () => controller.abort();
        }catch (err){
            console.log(err.message)
        }
    }

    return (
        <div>
            <div>
                <Cocktail cocktailId={cocktailId} token={token} cocktailInfo={cocktailInfo}/>
            </div>
            <div className='container'>
                <CommentList cocktailCommentsData={cocktailCommentsData}/>
                <CommentForm token={token} cocktailId={cocktailId} cocktailInfo={cocktailInfo}/>
            </div>
        </div>
    );
}
 
export default CocktailDetailsPage;