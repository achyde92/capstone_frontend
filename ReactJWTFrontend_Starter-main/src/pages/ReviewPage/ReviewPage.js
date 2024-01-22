import React, { useState } from 'react';
import StarRating from './StarRating'; 
import axios from 'axios';

const ReviewPage = () => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('https://localhost:5001/api/reviews', {
          review,
          rating,
        });
          console.log('Review submitted successfully:', response.data);
  
        setReview('');
        setRating(0);
      } catch (error) {
        console.error('Error submitting review:', error.response ? error.response.data : error.message);
      }
    };

  return (
    <div className="container">
      <h1>Write a Review</h1>
      <form onSubmit={handleReviewSubmit}>
        <label>
          Rating:
          <StarRating onChange={handleRatingChange} />
        </label>
        <label>
          Review:
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows="4"
            cols="50"
          />
        </label>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewPage;
