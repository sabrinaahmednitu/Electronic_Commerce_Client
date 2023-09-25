import { createContext, useContext } from 'react';

const AppContext = createContext();

//delivery man
const AppProvider = ({ children }) => {
    return (
      <AppContext.Provider value={{ myName: 'Sabrina Ahmed Nitu' }}>
        {children}
      </AppContext.Provider>
    );
};

//custom hook
const useProductContext = () => {
    return useContext(AppContext);
    //  const myname = useContext(AppContext) ai line er poriborte oi last part bosbe;
};

export { AppProvider, AppContext, useProductContext };