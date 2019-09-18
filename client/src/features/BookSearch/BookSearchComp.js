import React from "react";

export const BookSearchComp = (props) => {
    return (
    <div>
      <form onSubmit={props.searchFunc}>
        <label>
          Name:
          <input type="text" value={""} onChange={() => console.log("test")} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
    )
}