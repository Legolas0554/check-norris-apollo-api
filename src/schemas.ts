import { gql } from 'apollo-server';

export default gql`
  type Query {
    categories: [String]!
    randomJoke: String
    categoryJoke(category: String!): String
    foundJoke(query: String!): String
  }
`;        