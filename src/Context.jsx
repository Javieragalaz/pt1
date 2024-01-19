import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // BUTTONS

//CREAR EL CONTEXTO

export const Context = createContext();

//PROVEER EL CONTEXTO 

export const Provider = ({ children }) => { //TODAS LOS HIJOS USAN EL MISMO GLOBAL STATE
    const navigate = useNavigate();
    const [balance , setBalance] = useState([]); // SALDO
    const [user, serUser] = useState ([]) //DATOS DEL USUARIO



function goToAccount () {
  navigate (`/account`)
}



  const globalState = {
 
    goToAccount,
  
  }
return <Context.Provider value={globalState}>{children}</Context.Provider> }   ;