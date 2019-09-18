export const FETCH_BOOKDATA = 'FETCH_BOOKDATA';
export const FETCH_AUTHORDATA = 'FETCH_AUTHORDATA';
export const DISPLAY_EDITDATA = 'DISPLAY_EDITDATA'




  export const fetchBookData = data => ({
    type: FETCH_BOOKDATA,
    payload:  data 
  });
  
  export const fetchAuthorData = data => ({
    type: FETCH_AUTHORDATA,
    payload:  data 
  });
  
  export const displayEditData = data => ({
    type: DISPLAY_EDITDATA,
    payload: data
  })

// export const fetchBookData = data =>{
//     return  dispatch => {
//        dispatch(fetchBookDataSuccess(data))
//     }
// }


// export const fetchAuthorData = data =>{
//   return  dispatch => {
//       dispatch(fetchAuthorDataSuccess(data))
//   }
// }