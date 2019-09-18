import React from "react"
import EditBookComp from "./EditBookComp"
import {lifecycle, compose, withState} from 'recompose'
import {client} from "../../index"


const EditBook = (props, {editInputValues, setEditInputValues}) =>{


    const bookNameInput = (value) =>{
        // if (!/\d/.test(value)) {
            // setEditInputValues({...editInputValues, bookValue: value})
        // } 
        console.log(editInputValues)
        return value
      }
    
      const genreNameInput = (value) =>{
        if (!/\d/.test(value)) {
            setEditInputValues({...editInputValues, genreValue: value})
        }
      }


    const saveMyEdit = (e) =>{
        e.preventDefault()
        console.log("SAVING " + 
        "Book: " + props.bookEditValues.name,
        "Genre: " + props.bookEditValues.genre,
        "Author: " + props.bookEditValues.author,
        "Book ID: " + props.bookEditValues.id)
    }
    return(
        <EditBookComp 
        saveFunc={saveMyEdit} 
        bookEditValues={props.bookEditValues} 
        bookNameInput={bookNameInput}
        genreNameInput={genreNameInput}/>
    )
}

const enhance = compose(
    lifecycle({
    componentDidMount(){
     
    }
  }),
  withState('editInputValues', 'setEditInputValues', 'test'),
  )
  
  export default enhance(EditBook)