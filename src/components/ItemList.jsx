import React from 'react';

const ItemList = ({ items, deleteItem }) => {
  return (
    <ul className="max-w-md mx-auto mt-4 p-4 border rounded-md">
      {items.map((item, index) => (
        <li key={index} className="py-2 border-b last:border-0 flex justify-between items-center">
          <span>{item}</span>
          <button
            onClick={() => deleteItem(index)}
            className="px-2 py-1 bg-red-600 text-white rounded"
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
