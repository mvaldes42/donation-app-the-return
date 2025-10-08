import React from 'react'
import { createRoot } from 'react-dom/client'
import client from './graphql/client'
import { ApolloProvider } from '@apollo/client'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)
root.render(
  (
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  ) as React.ReactNode
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
