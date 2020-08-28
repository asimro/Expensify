import React, { createContext, useReducer } from "react";
import Reducer from "../Redux/createReducer";

const initialState = {
  transactions: [
    { id: 0, desc: "amount", amount: 900 },
    { id: 1, desc: "lappi", amount: -200 },
  ],
};

export const GlobalContext = createContext(initialState);

//creating global provider for complete application
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const addTransaction = (trans) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: {
        desc: trans.desc,
        amount: trans.amount,
      },
    });
  };
  const delTransaction = (id) => {
    dispatch({
      type: "DEL_TRANSACTION",
      payload: id,
    });
  };
  return (
    <GlobalContext.Provider
      value={{ transactions: state, addTransaction, delTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
