import React, { useContext, useState } from 'react';

const ContextAlert = React.createContext();

export const useCustomContext = () => {
  return useContext(ContextAlert);
};

const Context = ({ children }) => {
  const [value, setValue] = useState('');
  const [popularMovies, setPopularMovies] = useState([]);

  return (
    <ContextAlert.Provider
      value={{
        value: value,
        setValue: setValue,
        popularMovies: popularMovies,
        setPopularMovies: setPopularMovies,
      }}
    >
      {children}
    </ContextAlert.Provider>
  );
};

export default Context;
