import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // BUTTONS

//CREAR EL CONTEXTO

export const Context = createContext();

//PROVEER EL CONTEXTO 

export const Provider = ({ children }) => { //TODAS LOS HIJOS USAN EL MISMO GLOBAL STATE
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [balance , setBalance] = useState([]);
    const [user, serUser] = useState ([])
}

function Transactions() {
    navigate(`transaction`);
  }

  const globalState = {
    data,
    setData,
    balance,
    setBalance,
    user,
    setUser,
    Transactions
  }

  return <Context.Provider value={globalState}>{children}</Context.Provider>;