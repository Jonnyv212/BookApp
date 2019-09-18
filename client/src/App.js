import React from 'react';
import BookList from './features/BookList/BookList';
import AuthorList from './features/AuthorList/AuthorList';
import {BookSearch} from "./features/BookSearch/BookSearch"
import AddBook from "./features/AddBook/AddBook"
import "./index.css";

const App = () => {
  return (
      <div id="main">
         {/* <h1>Search</h1>  */}
         {/* <BookSearch /> */}
        <h1>Books</h1>
        <BookList/>
        {/* <h1>Authors</h1> */}
        {/* <AuthorList />  */}
        <AddBook />
      </div>
  );
}

export default (App);