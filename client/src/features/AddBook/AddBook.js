import React from "react"
import AddBookComp from './AddBookComp';
import {getBooksQuery, getAuthorsQuery, ADD_BOOK} from "../../graphql/Queries"
import {fetchAuthorData} from "../../redux/actions/DataActions"
import {client} from "../../index"
import { connect } from 'react-redux'
import {lifecycle, compose, withState} from 'recompose'
import { fetchBookData } from "../../redux/actions/DataActions";


const AddBook = ({authorState, inputValues, setInputValues, fetchBooks}) => {

  //Wrap these input functions
  const bookNameInput = (value) =>{
    if (!/\d/.test(value)) {
    setInputValues({...inputValues, bookValue: value})
    } 
  }

  const genreNameInput = (value) =>{
    if (!/\d/.test(value)) {
    setInputValues({...inputValues, genreValue: value})
    }
  }


//clear states
 const submitForm = (values) =>{
  values.preventDefault();
  // console.log(values)

  // console.log(getExistingBooks.bookList.filter(book => book.name == inputValues.bookValue))
  // if(newBooks.length <= 0){
  //   console.log("Adding new book")
  client.mutate({
    mutation: ADD_BOOK,
      variables: {
        name: inputValues.bookValue,
        genre: inputValues.genreValue,
        authorId: inputValues.authorIDValue
    },
    update: (cache) => {
      // console.log(cache)

      // console.log(data)
      // console.log(getExistingBooks)
      // const getExistingBooks = cache.readQuery({ query: getBooksQuery });
      // console.log(getExistingBooks.bookList)
      //  const newBooks = getExistingBooks.bookList.filter(b => (b.name == inputValues.bookValue && b.genre == inputValues.genreValue));
      //  console.log(newBooks)
      const existingBooks = cache.readQuery({ query: getBooksQuery });
      const newBooks = existingBooks.bookList.filter(b => 
        (b.name == inputValues.bookValue && b.genre == inputValues.genreValue));
      cache.writeQuery({
        query: getBooksQuery,
        data: {
          bookList: newBooks,
        }
      });
      console.log(cache.data.data)
    }
  })
// }else{
//   console.log("Already exists")
// }

client.query({query: getBooksQuery})
.then(result => fetchBooks(result.data))

  setInputValues({genreValue: "", bookValue: "", authorIDValue: ""})
}

  if (!authorState) return <p>Loading...</p>;
  return <AddBookComp 
    submit={submitForm}
    inputValues={inputValues}
    setInputValues={setInputValues}
    bookFunc={bookNameInput} 
    genreFunc={genreNameInput} 
    authorData={authorState}/>
}

const mapStateToProps = (state) => ({
  bookState: state.bookStates.bookData.bookList,
  authorState: state.authorStates.authorData.authorList
})

const mapDispatchToProps = (dispatch) =>({
  fetchBooks: data => dispatch(fetchBookData(data)),
  fetchAuthors: data => dispatch(fetchAuthorData(data))
})



const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
  componentDidMount(){
    client.query({query: getAuthorsQuery})
    .then(result => this.props.fetchAuthors(result.data))
  }
}),
withState('inputValues', 'setInputValues',
{ 
  bookValue: "",
  genreValue: "",
  authorIDValue: ""
}),
)

export default enhance(AddBook)