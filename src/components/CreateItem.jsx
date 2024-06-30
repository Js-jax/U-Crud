import React, { useState } from 'react';

const CreateItem = ({ addItem }) => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() !== '') {
      addItem(name);
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4 p-4 border rounded-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Crear
      </button>
    </form>
  );
};

export default CreateItem;
