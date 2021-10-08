// TODO: Construct login credentials and mutation
import { gql } from '@apollo/client';
// import gql from 'graphql-tag';

// TODO: Cosntruct add user mutation
export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email: String!) {
  addUser(username: $username, password: $password, email: $email) {
    token
    user {
      _id
      username
      email
      bookCount
      savedBooks {
        authors
        bookId
        image
        link
        title
        description
      }
    }
  }
}
`;
// TODO: Add login mutation
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
// TODO: Add saveBook mutation
export const SAVE_BOOK = gql`

    mutation saveBook($input: SavedBookInput!) {
    saveBook (input: $input)
        {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                image
                link
                title
                description
            }
        }
    }
`;

// TODO: Cosntruct remove book mutation
export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId:$bookId) {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                image
                link
                title
                description
            }
        }
}
`;
