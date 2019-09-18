import React from 'react';

const AddBookComp = (props) => {

    // console.log('Book value: ', props.inputValues.bookValue);
    // console.log('Genre value: ', props.inputValues.genreValue);
    console.log('Author value: ', props.inputValues.authorIDValue);

    const displayAuthors = () =>{
        return (props.authorData.map(author =>
        <option key={author.id} value={author.id} >
            {author.name}
        </option>
        ))
    }


    return(
        <form id="add book" onSubmit={e => props.submit(e)}>
            <div className="field">
                <label>Book name:</label>
                <input type="text" value={props.inputValues.bookValue} onChange={v => props.bookFunc(v.target.value)}/>
            </div>

            <div className="field">
                <label>Genre:</label>
                <input type="text" value={props.inputValues.genreValue} onChange={v => props.genreFunc(v.target.value)}/>
            </div>

            <div className="field">
                <label>Author:</label>
                <select value={props.inputValues.authorIDValue} onChange={v => props.setInputValues({...props.inputValues, authorIDValue: v.target.value})}>
                    <option>Select author</option>
                    {displayAuthors()}
                </select>
            </div>

            <button>Add Book</button>
        </form>
    )
}

export default AddBookComp;