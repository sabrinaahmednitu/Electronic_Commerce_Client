import React, { createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({children}) => {
    return <AppContext.Provider value='Nitu Ahmed'>
       {children}
   </AppContext.Provider>
};

export { AppProvider, AppContext };