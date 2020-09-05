import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, hashHistory, IndexRoute } from "react-router"

// This is set up for root
import { ApolloProvider } from "react-apollo"
import ApolloClient from "apollo-client"
import { createHttpLink, HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"

import App from "./components/App"
import SongList from "./components/SongList"
// THIS IS MIN CONFIG FOR APOLLO/ REACT, YOU SHOULD BE ABLE TO DO QUERIES AS IS
const client = new ApolloClient({
  link: HttpLink,
  cache: new InMemoryCache(),
})

const Root = () => {
  return (
    // the glue between react and graphql/apollo world, its shovelling data over to the react side of the application
    <ApolloProvider client={client}>
       <Router history={hashHistory}> 
        <Route path='/' component={App}>
          <IndexRoute component={SongList} />
        </Route>
       </Router> 
    </ApolloProvider>
  )
}

ReactDOM.render(<Root />, document.querySelector("#root"))
