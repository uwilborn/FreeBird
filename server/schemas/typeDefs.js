const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
    parks: [Park]
    park(id:ID!): Park
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }

  type Park {
    _id: ID
    type: String
    site_name: String
    site_location: String
    site_url: String
    site_address: String
    description: String
  }

  type Category {
    _id: ID
    name: String
  }  
`;

module.exports = typeDefs;
