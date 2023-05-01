import React, { useState } from "react";
import Modal from "react-modal";
import { FaBorderNone, FaStar } from "react-icons/fa";
import "../Styles/RatingPopUp.css";
import { updateOrder } from "../data/endpoints";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "60vw",
    height: "auto",
    padding: "20px",
  },
};

const RatingPopUp = ({ isOpen, closeModal, data }) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleFeedback = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
        event.preventDefault();
        const resp = await updateOrder(data._id, {feedback, rating})
        console.log(resp)
        setIsLoading(true)
        closeModal();
    } catch (error) {
        setIsLoading(false)
        console.log(error)
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Feedback Modal"
    >
      <h2>Leave Your Feedback</h2>
      <form className="ratingPopUpForm" onSubmit={handleSubmit}>
        <div className="rating-container">
          {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;
            return (
              <label key={ratingValue}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => handleRating(ratingValue)}
                />
                <FaStar
                  className="star"
                  color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                  size={50}
                />
              </label>
            );
          })}
        </div>
        <div className="feedback-container">
          <textarea
          className=".feedback-input"
            placeholder="Enter your feedback here..."
            rows="4"
            cols="50"
            value={feedback}
            onChange={handleFeedback}
          ></textarea>
        </div>
        <div className="button-container">
          <button className="submit-button" type="submit">
             {isLoading ? <div className="spinner"></div> : " Submit"}
          </button>
          <button className="cancel-button" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default RatingPopUp;
