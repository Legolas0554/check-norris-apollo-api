import { gql } from 'apollo-server';

export default gql`

  type Book {
    title: String
    author: String
    test: String
  }
  type Query {
    books: [Book]
  }
`;