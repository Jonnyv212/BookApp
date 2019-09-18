import {gql} from 'apollo-boost'

export const getBooksQuery = gql`
{
  bookList{
      id
      name
      genre
      author{
        name
      }
  }
}`;

export const getAuthorsQuery = gql`
{
    authorList{
        id
        name
    }
}`;

export const ADD_BOOK = gql`
  mutation ($name: String!, $genre: String!, $authorId: ID!){
      addBook(name: $name, genre: $genre, authorId: $authorId){
      name,
      genre,
      id
    }
  }`