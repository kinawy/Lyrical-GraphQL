import React from "react"
import gql from "graphql-tag"
import { graphql } from "react-apollo"

const SongList = (props) => {


let renderSongs = 

  return <div>SongList</div>
}

const query = gql`
  {
    songs {
      title
    }
  }
`

export default graphql(query)(SongList)
