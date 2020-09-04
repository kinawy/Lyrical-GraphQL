import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
// THIS IS MIN CONFIG FOR APOLLO/ REACT, YOU SHOULD BE ABLE TO DO QUERIES AS IS
const client = new ApolloClient({})

const Root = () => {
  return (
    // the glue between react and graphql/apollo world, its shovelling data over to the react side of the application
    <ApolloProvider client={client}>
    <div>Lyrical</div>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
