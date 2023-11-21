import React from 'react';

export default function Item({ name, quantity, category, onItemSelect, onDeleteItem}) {
  const handleClick = () => {
    onItemSelect(name, quantity, category);
  };

  return (
    <div
      className="flex items-center justify-between text-white p-2 w-full max-w-md m-3 ml-4 rounded bg-gray-800 border border-green-500 hover:bg-gray-500 transition duration-300 ease-in-out"
      onClick={handleClick}
      style={{ cursor: 'pointer' }} >
      <div>
        <h2 className="text-lg mr-2 font-bold">{name}</h2>
        <p className="text-sm">Buy {quantity} in {category}</p>
      </div>
      <button className="text-sm py-1 px-2 bg-yellow-600 hover:bg-yellow-500 rounded-md text-white" onClick={onDeleteItem}>Delete</button>
    </div>
  );
}