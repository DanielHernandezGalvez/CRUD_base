import { useState } from 'react'
import { useGlobalState } from "../../context/GlobalState"

const TransactionForm = () => {
  const { addTransaction } = useGlobalState()
  const [description, setDescription] = useState()
  const [amount, setAmount] = useState(0)
  let id = ""

  const onSubmit = (e) => {
    e.preventDefault()
    addTransaction(
      {
        id: window.crypto.randomUUID(),
        description,
        amount: +amount // another way to become to number
      })
      setAmount("")
      setDescription("")
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full'
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          placeholder='descripcion'
          value={description}
        />
        <input
          className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full'
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          step={0.5}
          placeholder='00.00'
          value={amount}
        />
        <button
          className='bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full'>
          Agregar Transacción
        </button>
      </form>
    </div>
  )
}

export default TransactionForm
