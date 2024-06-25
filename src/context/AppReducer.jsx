export default (state, action) => {
  // Destructure the action object to access its type and payload properties
  const { type, payload } = action;

  // Handle different action types using a switch statement
  switch (type) {
    case "ADD_TRANSACTION":
      // Create a new state object based on the existing state
      return {
        // Spread the existing state properties using the spread operator (...)
        ...state,
        // Update the transactions property with a new array
        transactions: [...state.transactions, payload], // Add the new transaction from the payload to the existing array
      };

    case "DELETE_TRANSACTION":
      // Create a new state object based on the existing state
      return {
        ...state,
        // Update the transactions property with a filtered array
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload), // Only keep transactions where the ID doesn't match the payload (ID to delete)
      };

    default:
      // If the action type is not recognized, return the current state without modifications
      return state;
  }
};
