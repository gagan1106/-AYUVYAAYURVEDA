import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [rating1, setRating1] = useState(null);
  const [hover1, setHover1] = useState(null);

  const [thumbUpActive, setThumbUpActive] = useState(false);
  const [thumbDownActive, setThumbDownActive] = useState(false);

  const handleThumbUpClick = () => {
    setThumbUpActive(true);
    setThumbDownActive(false);
  };

  const handleThumbDownClick = () => {
    setThumbDownActive(true);
    setThumbUpActive(false);
  };

  return (
    <div>
      <h1>Leave a review</h1>
      <h2>Safety</h2>
      <p>How would you like the safety service.</p>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => {
                setRating(currentRating);
              }}
            />
            <FaStar
              className="star"
              size={50}
              color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}

      <h2>Communication</h2>
      <p>How would you like the communication service.</p>
      {[...Array(5)].map((star1, index1) => {
        const currentRating1 = index1 + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={currentRating1}
              onClick={() => {
                setRating1(currentRating1);
              }}
            />
            <FaStar
              className="star1"
              size={50}
              color={
                currentRating1 <= (hover1 || rating1) ? "#ffc107" : "#e4e5e9"
              }
              onMouseEnter={() => setHover1(currentRating1)}
              onMouseLeave={() => setHover1(null)}
            />
          </label>
        );
      })}

      <h2>Would you recommended Trausti?</h2>
      <div className="thumbs-container">
        <FontAwesomeIcon
          icon={faThumbsUp}
          className={`thumb ${thumbUpActive ? "active" : ""}`}
          onClick={handleThumbUpClick}
        />
        <span className="label">Yes</span>
        <FontAwesomeIcon
          icon={faThumbsDown}
          className={`thumb ${thumbDownActive ? "active" : ""}`}
          onClick={handleThumbDownClick}
        />
        <span className="label">No</span>
      </div>
    </div>
  );
};

export default Review;
