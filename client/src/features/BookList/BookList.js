import React from "react"
import {BookListComp, BookListLoading} from './BookListComp';
import {getBooksQuery} from "../../graphql/Queries"
import {lifecycle, compose, withState} from 'recompose'
import {client} from "../../index"
import { connect } from 'react-redux'

// import {useQuery, useLazyQuery} from '@apollo/react-hooks';
// import { useSelector, useDispatch } from "react-redux";
import { fetchBookData, displayEditData } from "../../redux/actions/DataActions";

const BookList = ({bookState, fetchBooks, displayState, displayEdit, bookEditValues, setBookEditValues}) => {

  const getBookData = () => {
     client.query({query: getBooksQuery})
     .then(result => fetchBooks(result.data))
  }



  const EditData = (id, name, genre, author, authorID) =>{
    displayEdit(true)
    console.log("Edit details: " + "ID: " + id + " name: "+ name + " genre: " + genre + " author: " + author + " author ID: " + authorID)
    const bookData={
      id,
      name,
      genre,
      author,
      authorID
    }
    
    setBookEditValues(bookData)

  // client.mutate({
  //   mutation: EDIT_BOOK,
  //     variables: {
  //       name: name,
  //       genre: genre,
  //       authorId: authorID
  //   },
  // })
  }


  return !bookState  ? <BookListLoading setReduxData={getBookData} /> 
  : <BookListComp 
  editData={EditData}
  bookEditValues={bookEditValues}
  displayEditFunc={displayEdit}
  displayEditState={displayState}
  setReduxData={() => fetchBooks("")} bookData={bookState} />
}



const mapStateToProps = (state) => ({
  bookState: state.bookStates.bookData.bookList,
  displayState: state.displayStates.displayEdit
})

const mapDispatchToProps = (dispatch) =>({
  fetchBooks: data => dispatch(fetchBookData(data)),
  displayEdit: data => dispatch(displayEditData(data))
})


const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
    ),
  lifecycle({
  componentDidMount(){
    client.query({query: getBooksQuery})
    .then(result => this.props.fetchBooks(result.data))

    console.log('Did Mount');
  },
  componentDidUpdate(){
    console.log('Did Update');
  },
  componentWillUnmount(){
    console.log('Did Unmount');

  },
}),
withState('bookEditValues', 'setBookEditValues', 
{
  currentValues: '',
  fieldValues: ''
}),
)

export default enhance(BookList)