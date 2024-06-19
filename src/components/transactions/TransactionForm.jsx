import { useState } from 'react'
import {useGlobalState} from "../../context/GlobalState"

const TransactionForm = () => {
  const {addTransaction} = useGlobalState()
  const [description, setDescription] = useState()
  const [amount, setAmount] = useState(0)
  let id = ""

  const onSubmit = (e) => {
    e.preventDefault()
    addTransaction(
      {
        id: window.crypto.randomUUID(),
        description, 
        amount: +amount // asi lo convierte a número
      })
    console.log(id,description, amount)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={(e) => setDescription(e.target.value)} placeholder='descripcion' />
        <input type="number" onChange={(e) => setAmount(e.target.value)} step={0.5} placeholder='00.00' />
        <button>Agregar Transacción</button>
      </form>
    </div>
  )
}

export default TransactionForm
