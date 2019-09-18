import React from 'react';

const EditBookComp = (props) => {
    console.log(props)
    return(
        <form id="editbook" onSubmit={e => props.saveFunc(e)}>
            <h3>Edit Book</h3>
            <div className="field">
                <label>Book name:</label>
                <input type="text" value={props.bookEditValues.name} onChange={v => props.bookNameInput(v.target.value)}/>
            </div>

            <div className="field">
                <label>Genre:</label>
                <input type="text" value={props.bookEditValues.genre} onChange={v => props.genreNameInput(v.target.value)}/>
            </div>

            <div className="field">
                <label>Author:</label>
                <select>
                    <option>Select author</option>
                </select>
            </div>

            <button>Save</button>
        </form>
    )
}

export default EditBookComp;