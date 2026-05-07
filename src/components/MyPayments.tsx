import { useGetTransactions } from './queries/useGetTransactions.graphql'

export default function MyPayments() {
  const { data: transactions, loading, error } = useGetTransactions()
  if (loading || error) {
    return <div>Loading...</div>
  }
  console.log(transactions)
  return (
    <div className="w-100 h-100 pa3 flex flex-column">
      <h1>My Payments</h1>

      <div className="w-100 flex flex-column">
        <div className="w-100 flex ba">
          <div className="w-25">Amount</div>
          <div className="w-25">Donator</div>
          <div className="w-25">Date</div>
          <div className="w-25">Type</div>
        </div>
        <div className="w-100 flex-column">
          {transactions.transaction?.map((transaction: any) => {
            const donation = transaction.donation
            return (
              <div className="w-100 flex ba" key={transaction.id}>
                <div className="w-25">{donation.amount / 100}</div>
                <div className="w-25">
                  {donation.firstName} {donation.lastName}
                </div>
                <div className="w-25">
                  {new Date(donation.createdAt).toLocaleDateString('fr-FR')}
                </div>
                <div className="w-25">{transaction.type}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
