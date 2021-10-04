import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap';
import Review from './Review';

function UserReviews() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('./userreview.JSON')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])
    return (
        <div>
            <h2>user reviews</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {reviews.map(review => <Review
                    key={review.id}
                    review={review} ></Review>)}

            </Row>


        </div >
    )
}

export default UserReviews
