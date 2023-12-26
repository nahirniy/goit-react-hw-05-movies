import React, { useContext, useState } from 'react';

const ContextAlert = React.createContext();

export const useCustomContext = () => {
  return useContext(ContextAlert);
};

const Context = ({ children }) => {
  const [currentMovies, setCurrentMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  return (
    <ContextAlert.Provider
      value={{
        popularMovies: popularMovies,
        setPopularMovies: setPopularMovies,
        currentMovies: currentMovies,
        setCurrentMovies: setCurrentMovies,
      }}
    >
      {children}
    </ContextAlert.Provider>
  );
};

export default Context;
