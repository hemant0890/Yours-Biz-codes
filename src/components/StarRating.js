import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

// import StarIcon from "@material-ui/icons/Star";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div >
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <div className="starContainer">
              <FaStar
                className="star"
                key={star}
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                size={100}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
              {(ratingValue === 1 && <p className="starText">Poor</p>) ||
                (ratingValue === 2 && (
                  <p className="starText">Need Improvement</p>
                )) ||
                (ratingValue === 3 && <p className="starText">Acceptable</p>) ||
                (ratingValue === 4 && <p className="starText">Good</p>) ||
                (ratingValue === 5 && <p className="starText">Excellent</p>)}
            </div>
          </label>
        );
      })}
    </div>
  );
};
export default StarRating;
