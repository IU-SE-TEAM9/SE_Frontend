// AptContext.js
import React, { createContext, useContext, useState, useCallback } from 'react';

const AptContext = createContext();

export const AptProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    bed: null, // Add a bed filter
    // ... other filters
  });

  const updateFilters = useCallback((newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  }, []);

  const contextValue = {
    filters,
    updateFilters,
  };

  return <AptContext.Provider value={contextValue}>{children}</AptContext.Provider>;
};

export const useAptContext = () => {
  return useContext(AptContext);
};
