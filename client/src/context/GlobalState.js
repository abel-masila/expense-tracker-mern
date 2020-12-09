import React, { useReducer, createContext } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvder = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  async function getTransactions() {
    try {
      const res = await axios.get("/api/v1/transactions");
      dispatch({
        type: "GET_TXN",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "TXN_ERROR",
        payload: error.response.data.error,
      });
    }
  }
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
        error: state.error,
        loading: state.loading,
        deleteTxn,
        AddTxn,
        getTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
