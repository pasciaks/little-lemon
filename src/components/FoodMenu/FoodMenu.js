import React from "react";
import "./FoodMenu.css"; // Import your CSS file for styling

const FoodMenu = () => {
  // Dummy data for food items (replace with your actual data)
  const foodItems = [
    { id: 1, image: "salmon.jpg", title: "Grilled Salmon", price: "$19.99" },
    { id: 2, image: "salad.jpg", title: "Caprese Salad", price: "$12.99" },
    { id: 3, image: "pasta.jpg", title: "Pasta Carbonara", price: "$16.99" },
    { id: 4, image: "pizza.jpg", title: "Margherita Pizza", price: "$14.99" },
    { id: 5, image: "steak.jpg", title: "Steak Frites", price: "$24.99" },
    { id: 6, image: "tiramisu.jpg", title: "Tiramisu", price: "$8.99" },
  ];

  return (
    <>
      <div className="food">
        <div className="food-menu">
          {foodItems.map((item) => (
            <div className="food-card" key={item.id}>
              <img
                src={"../images/" + item.image}
                alt={item.title}
                className="food-image"
              />
              <div className="food-content">
                <h3 className="food-title">{item.title}</h3>
                <p className="food-price">{item.price}</p>
              </div>
              <button
                className="food-button"
                onClick={() => {
                  alert(
                    "Added to cart! (Just kidding, wasn't required to implement this feature yet!"
                  );
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FoodMenu;
