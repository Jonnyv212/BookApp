import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient, { InMemoryCache } from "apollo-boost";
import {ApolloProvider} from "@apollo/react-hooks";
import {Provider} from 'react-redux'
import store from './redux/store'



export const client = new ApolloClient({
    uri:'http://localhost:4000/graphql/',
    cache: new InMemoryCache(),
  })


ReactDOM.render(
   <Provider store={store}>
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
     </Provider>
, document.getElementById('root'));

