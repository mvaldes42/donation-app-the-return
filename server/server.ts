import express from 'express'
import http from 'http'
import {
  generateModelTypes,
  generateApolloServer
} from 'graphql-sequelize-generator'
import { GraphqlSchemaDeclarationType } from 'graphql-sequelize-generator/types'
import { PubSub } from 'graphql-subscriptions'

import models from '../models'

const types = generateModelTypes(models)

let graphqlSchemaDeclaration: GraphqlSchemaDeclarationType = {}

graphqlSchemaDeclaration.task = {
  model: models.task,
  actions: ['list', 'create', 'update', 'delete', 'count'],
  subscriptions: ['create', 'update', 'delete']
}

const pubSubInstance = new PubSub()

const server = generateApolloServer({
  graphqlSchemaDeclaration,
  types,
  models,
  pubSubInstance
})

const app = express()
server.applyMiddleware({
  app,
  path: '/graphql'
})

const port = process.env.PORT || 8080

const serverHttp = http.createServer({}, app).listen(port, async () => {
  console.log(
    `🚀 http/https/h2 server runs on  http://localhost:${port}/graphql .`
  )
})

server.installSubscriptionHandlers(serverHttp)
