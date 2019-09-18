import React from 'react';

export const AuthorListComp = (props) => {
  const myUL = props.authorData.map(author =>
    <ul key={author.id}>
        <li>{author.name}</li>
    </ul>)

  return <div className="bookListDiv">
  {myUL}
  </div>
}

export const AuthorListLoading = () =>{
  return <div>Loading book list...</div>
}