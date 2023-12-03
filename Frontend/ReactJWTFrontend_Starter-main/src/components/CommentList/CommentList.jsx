import React from 'react';

const CommentList = ({cocktailCommentsData}) => {

    let list = cocktailCommentsData?.comments?.map((comment,index) => (
        <div key={index}>
            <h5>{comment.user.userName}:</h5>
            <p>{comment.text}</p>
            <h6>{comment.rating} ⭐'s</h6>
        </div>
    ));

    return (
        <div>
            <div>
                <h2>Average User Rating:{`${cocktailCommentsData?.averageRating}⭐'s`}</h2>
            </div>
            <div>
                <h3>User Reviews</h3>
                {list}
            </div>
        </div>
    );
}
 
export default CommentList;