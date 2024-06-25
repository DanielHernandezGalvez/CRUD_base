import { Children, createContext, useContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer"; // Import the reducer function

const initialState = {
  transactions: [], // Initial state for the global context: an empty array of transactions
};

// Create a React Context for global state management
export const Context = createContext();

// Hook to access the global state context from any component
export const useGlobalState = () => {
  const context = useContext(Context); // Get the context value
  return context; // Return the context value (all state and actions)
};

// Global state provider component
export const GlobalProvider = ({ children }) => {
  // Use useReducer hook with AppReducer, initialState, and a custom initializer
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    const localData = localStorage.getItem("transactions"); // Get transaction data from localStorage
    return localData ? JSON.parse(localData) : initialState; // If data exists, parse it, otherwise return initial state
  });

  // useEffect hook to persist state in localStorage on state changes
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state)); // Store state as JSON string in localStorage
  }, [state]); // Run only when state changes

  // Action creators (functions to dispatch actions)
  const addTransaction = (transaction) => {
    dispatch({ // Dispatch an action to update state
      type: "ADD_TRANSACTION", // Action type
      payload: transaction, // Data to add (the transaction object)
    });
    console.log("add transaction"); // (Optional) Log a message for debugging
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id, // Data to use (the transaction ID)
    });
    console.log("delete transaction"); // (Optional) Log a message for debugging
  };

  // Return the Context provider with the state and action creators as value
  return (
    <Context.Provider value={{
      transactions: state.transactions, // Provide the transactions array from state
      addTransaction, // Provide the addTransaction function
      deleteTransaction, // Provide the deleteTransaction function
    }}>
      {children} // Render the child components
    </Context.Provider>
  );
};
