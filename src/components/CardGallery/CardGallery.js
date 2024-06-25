import React from "react";
import "./CardGallery.css"; // Import your CSS file for styling

const CardGallery = () => {
  // Dummy data for cards (replace with your actual data)
  const cards = [
    {
      id: 1,
      image: "1.jpg",
      rating: 4.5,
      text: "The food is great.",
      name: "Sue",
    },
    { id: 2, image: "2.jpg", rating: 3.8, text: "Yummy Yummy", name: "Greg" },
    {
      id: 3,
      image: "3.jpg",
      rating: 4.2,
      text: "Best value and seating available.",
      name: "Steve",
    },
    {
      id: 4,
      image: "4.jpg",
      rating: 4.0,
      text: "Highly recommend it.",
      name: "Anne",
    },
    {
      id: 5,
      image: "5.jpg",
      rating: 4.7,
      text: "Good prices and value.",
      name: "Eric",
    },
    {
      id: 6,
      image: "6.jpg",
      rating: 3.9,
      text: "Very tasty food and great service.",
      name: "Joel",
    },
  ];

  return (
    <div className="card-gallery">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <img
            src={"../images/" + card.image}
            alt={`Card ${card.id}`}
            className="card-image"
          />
          <div className="card-content">
            <h3 className="card-title">{card.name}</h3>
            <p className="card-text">{card.text}</p>
            <div className="card-rating">
              Rating: {card.rating}
              {/* You can add star icons or any other rating display here */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGallery;
