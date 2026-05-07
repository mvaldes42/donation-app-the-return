import { gql, useQuery } from '@apollo/client'

const getTransactionsQuery = gql`
  query GetTransactions {
    transaction {
      id
      type
      donation {
        id
        firstName
        lastName
        amount
        createdAt
      }
    }
  }
`

export function useGetTransactions() {
  return useQuery(getTransactionsQuery)
}
