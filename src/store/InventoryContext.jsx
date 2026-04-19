import React, { createContext, useState, useContext } from 'react';

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <InventoryContext.Provider value={{ items, setItems, loading, setLoading, error, setError }}>
      {children}
    </InventoryContext.Provider>
  );
};
export const useInventory = () => useContext(InventoryContext);