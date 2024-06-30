import React, { useState } from 'react';
import CreateItem from './CreateItem';
import ItemList from './ItemList';

const CRUDApp = () => {
  const [items, setItems] = useState([]);

  const addItem = (name) => {
    setItems((prevItems) => [...prevItems, name]);
  };

  const deleteItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div>
      <CreateItem addItem={addItem} />
      <ItemList items={items} deleteItem={deleteItem} />
    </div>
  );
};

export default CRUDApp;
