import React from "react";


function NavBar(props) {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
      <div className="text-2xl font-bold">HattBazaar</div>

      {/* Navigation */}
      <nav className="flex items-center gap-6 text-xl ">
        <a href="hero" className="text-gray-700 hover:text-blue-500 transform transition ease-in duration-300 hover:scale-110">
          Home
        </a>
        <a href="products" className="text-gray-700 hover:text-blue-500 transform transition ease-in duration-300 hover:scale-110">
          Products
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-500 transform transition ease-in duration-300 hover:scale-110">
          About
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-500 transform transition ease-in duration-300 hover:scale-110">
          Contact
        </a>
      </nav>

      {/* Action buttons */}
      <div className="flex items-center gap-6">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-gray-200 p-2 rounded hover:bg-gray-300">
          🛒 Cart
        </button>
      </div>
      </div>
    </header>
    
  );
}

export default NavBar;

