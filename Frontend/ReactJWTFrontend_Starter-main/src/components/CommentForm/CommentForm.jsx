import React from 'react';
import useCustomForm from '../../hooks/useCustomForm';
import axios from 'axios';
import "./CommentForm.css"


const CommentForm = ({token,cocktailId,cocktailInfo}) => {

    const initialValues = {
        "text": "",
        "rating": ""
    }

    const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(postNewComment,initialValues);

    async function postNewComment(){
        try{
            let dataStructure = {
                cocktailId: `${cocktailId}`,
                name: `${cocktailInfo?.drinks[0]?.strDrink}`,
                text: `${formData.text}`,
                rating: `${formData.rating}`
            };
            let respon = await axios.post(`https://localhost:5001/api/Comments`, dataStructure,{ headers: {
                Authorization: "Bearer " + token || null,
                },
            });
            console.log(respon);
            window.location.reload();
        } catch(err){
            console.log(err.message);
        }
    }

    return (
        <div className='comment-container'>
            <form className='comment-form' onSubmit={handleSubmit}>
                <label>
                    Leave A Comment :
                    <textarea 
                    className='text-box'
                    type="text"
                    name='text'
                    value={formData.text}
                    onChange={handleInputChange}
                    />
                </label>
                <label>
                    Rating : {"(1-5)⭐'s"}
                    <input
                    type='text'
                    name='rating'
                    value={formData.rating}
                    onChange={handleInputChange}
                    className='rating-box'
                    />
                </label>
                <button>Comment</button>
            </form>
        </div>
    );
}
 
export default CommentForm;