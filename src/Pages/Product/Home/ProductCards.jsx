import React from "react";

function ProductCards() {
  const products = [
    {
      id: 1,
      name: "Wooden Table",
      price: "$250",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      name: "Wooden Table",
      price: "$250",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      name: "Wooden Table",
      price: "$250",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      name: "Wooden Table",
      price: "$250",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 5,
      name: "Wooden Table",
      price: "$250",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 6,
      name: "Wooden Table",
      price: "$250",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 7,
      name: "Wooden Table",
      price: "$250",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 8,
      name: "Wooden Table",
      price: "$250",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover hover:scale-105 transform transition duration-300"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.price}</p>
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCards;
