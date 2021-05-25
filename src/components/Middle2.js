import React, { useState } from "react";
import Photoshoot from "../images/photoshoot.png";
import StarRating from "./StarRating.js";

function Middle2() {
  const [review, setReview] = useState("");
  return (
    <>
      <div className="text1">
        how did we do? we’d love to hear about your experiences!
      </div>
      <div className="text2">
        Thank you so much for your recent order. Snaping out your beautiful
        journey was a great fun and we are curious to find how did you like it.
      </div>
      <div className="text3">
        If you can spare a few minute to leave us a review we would be super
        grateful!
      </div>
      <img src={Photoshoot} alt="" className="photoshoot" />
      <div className="review">
        <p className="review-header" style={{ margin: "5px auto" }}>
          Review
        </p>
        <form action="/" method="post">
          <textarea
            name="review"
            value={review}
            placeholder="Tell us your experience"
            className="text-area"
            onChange={(e) => {
              setReview(e.target.value);
            }}
          ></textarea>
          <p className="rateLabel">
            Rate <span style={{ fontWeight: "bold" }}>Kumarsphoto</span>
          </p>
          <div className="starRating">
            <StarRating />
          </div>
          <button type="submit" className="submitButton">
            <p className="submitText">Submit Review</p>
          </button>
        </form>
      </div>
    </>
  );
}

export default Middle2;
