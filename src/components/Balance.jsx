import { useGlobalState } from '../context/GlobalState';

const Balance = () => {
  // Access transactions from the global state using useGlobalState hook
  const { transactions } = useGlobalState();

  // Calculate the total balance
  const amounts = transactions.map(transaction => transaction.amount); // Extract amounts from transactions
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); // Reduce to a sum and format as string with two decimal places

  // Return JSX to display the total balance
  return (
    <div className='flex justify-between'>
      <p>Total</p>
      <h1 className='text-2xl font-bold'>$ {total}</h1>
    </div>
  );
};

export default Balance;
