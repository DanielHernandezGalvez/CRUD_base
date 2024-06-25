import React from 'react';
import { useGlobalState } from '../context/GlobalState';

const IncomeExpenses = () => {

  // Access transactions from the global state using useGlobalState hook
  const { transactions } = useGlobalState()

  // Calculate income and expense amounts
  const amounts = transactions.map(transaction => transaction.amount) // Extract amounts from transactions
  const income = amounts.filter(item => item > 0) // Filter positive amounts (income)
                     .reduce((acc, item) => (acc += item), 0) // Reduce to a sum and start at 0
                     .toFixed(2) // Format as string with two decimal places
  const expense = amounts.filter(item => item < 0) // Filter negative amounts (expenses)
                   .reduce((acc, item) => (acc += item), 0) // Reduce to a sum and start at 0
                   .toFixed(2) // Format as string with two decimal places
                   * -1 // Convert to positive for display (optional)

  // Return JSX with income and expense values
  return (
    <>
      <div className='flex justify-between my-2'>
        <h4>Ingresos</h4> {/* Heading for income */}
        <p>$ {income}</p> {/* Display formatted income */}
      </div>
      <div className='flex justify-between my-2'>
        <h4>Gastos</h4> {/* Heading for expenses */}
        <p>$ {expense}</p> {/* Display formatted expense */}
      </div>
    </>
  )
}

export default IncomeExpenses;
