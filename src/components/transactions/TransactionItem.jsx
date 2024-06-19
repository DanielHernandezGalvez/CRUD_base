import { useGlobalState } from "../../context/GlobalState"

const TransactionItem = ({ transaction }) => {
    const { deleteTransaction } = useGlobalState()

    return (
        <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center" key={transaction.id}>
            <p className="text-sm">{transaction.description}</p>
            <div>
                <span>$ {transaction.amount}</span>
                <button className="py-0 ms-3 font-bold px-2 bg-red-700 rounded-full text-white" onClick={() => {
                    deleteTransaction(transaction.id)
                }}>
                    X
                </button>
            </div>
        </li>
    )
}

export default TransactionItem
