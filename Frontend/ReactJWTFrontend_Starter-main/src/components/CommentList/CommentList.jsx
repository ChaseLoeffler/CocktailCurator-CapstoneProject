import React from 'react';
import './CommentList.css'

const CommentList = ({cocktailCommentsData}) => {

    let list = cocktailCommentsData?.comments?.map((comment,index) => (
        <div key={index}>
            <h3>{comment.user.userName}:</h3>
            <p>{comment.text}</p>
            <h4>{comment.rating} ⭐'s</h4>
        </div>
    ));

    return (
        <div>
            <div className='comments-container'>
                <h3>User Comments :</h3>
                <div className='comment-list-div'>
                    {list}
                </div>
                <hr/>
            </div>
        </div>
    );
}
 
export default CommentList;