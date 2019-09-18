import React from 'react';
import EditBook from "../EditBook/EditBook"

export const BookListComp = props => {
  //  console.log(props)
  const myUL = props.bookData.map(book =>
    <ul key={book.id}>
        <li>Name: {book.name}</li>
        <li>Genre: {book.genre}</li>
        <li>Author: {book.author.name}</li>
        <button onClick={() => props.editData(book.id, book.name, book.genre, book.author.name, book.author.id)}>Edit</button>
        <button>Save</button>
    </ul>
    )

  return (
    <div className="bookListDiv">
        <button onClick={() => props.setReduxData()}>
            Hide books
        </button>
        {!props.displayEditState ? 
          myUL
          : 
          <div>
            <button onClick={() => props.displayEditFunc(false)}>Back</button>
            <EditBook bookEditValues={props.bookEditValues} /> 
          </div>}
    </div>
  )
}

export const BookListLoading = props =>{
  return (
    <div>
      <button onClick={() => props.setReduxData()}>
        Show books
      </button>
        Click Set State to load books.
    </div>
  )
}