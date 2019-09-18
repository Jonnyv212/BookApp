import React from "react"
import {AuthorListComp, AuthorListLoading} from './AuthorListComp';
import { useSelector, useDispatch } from "react-redux";
import { fetchAuthorData } from "../../redux/actions/DataActions";
import {getAuthorsQuery} from "../../graphql/Queries"
import {useQuery, useLazyQuery} from '@apollo/react-hooks';


const AuthorList = () => {
  const {loading, error, data} =  useQuery(getAuthorsQuery)

  return loading ? <AuthorListLoading /> : <AuthorListComp authorData={data.authorList}/>
}

export default AuthorList;