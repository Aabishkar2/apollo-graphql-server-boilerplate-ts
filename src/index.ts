import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { createServer } from 'http'
import cors from 'cors'
import { makeExecutableSchema } from '@graphql-tools/schema'
import typeDefs from './modules/typeDef'
import resolvers from './modules/resolvers'
import { PostsAPI } from './datasources/posts/posts'
const app = express()

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
const server = new ApolloServer({
  schema,
})

app.use('*', cors())
server.applyMiddleware({ app, path: '/graphql' })
const httpServer = createServer(app)
httpServer.listen({ port: 3000 }, (): void =>
  console.log(`\n🚀      GraphQL is now running on http://localhost:3000/graphql`),
)
