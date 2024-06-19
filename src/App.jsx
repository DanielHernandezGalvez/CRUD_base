import Balance from './components/Balance'
import ExpenseChart from './components/ExpenseChart'
import Header from './components/Header'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionForm from './components/transactions/TransactionForm'
import TransactionList from './components/transactions/TransactionList'
import { GlobalProvider } from './context/GlobalState'

const App = () => {
  return (
    <GlobalProvider>
      <div className='bg-zinc-900 text-white  flex justify-center items-center py-10 '>
        <div className='container mx-auto w-[80%] '>
          <div className='bg-zinc-800 h-fit p-10 rounded-lg flex flex-wrap gap-12 overflow-y-auto scrollbar-hide'>
            <div>
              <h1 className='text-white text-4xl font-bold'>Finanzas personales</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />

            </div>
            <div className='flex flex-col flex-1 overflow-y-auto scrollbar-hide'>
              {/* <ExpenseChart /> */}
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App
