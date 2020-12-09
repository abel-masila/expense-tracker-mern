import React, { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  transactions: [],
};

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvder = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTxn(id) {
    dispatch({
      type: "DELETE_TXN",
      payload: id,
    });
  }
  function AddTxn(txn) {
    dispatch({
      type: "ADD_TXN",
      payload: txn,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTxn,
        AddTxn,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
