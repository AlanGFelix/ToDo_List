import React from 'react';

function useLocalStorage(itemName, defaultValue) {
  const [items, setItems] = React.useState(defaultValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
    try {
        if(localStorage.getItem(itemName)) {
            setItems(JSON.parse(localStorage.getItem(itemName)));
        }
    }catch(error) {
        setError(true);
    }
    setLoading(false);
  },[itemName]);

  function saveItem(nuevosItems) {
    localStorage.setItem('todos', JSON.stringify(nuevosItems));
    setItems(nuevosItems);
  }

  return {
    items,
    saveItem,
    loading,
    error
  };
}


export { useLocalStorage };