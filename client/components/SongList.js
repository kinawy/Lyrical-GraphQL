import React from "react"
import gql from "graphql-tag"
import { graphql } from "react-apollo"

const SongList = (props) => {
  let renderSongs = () => {
    console.log(props.data.songs)
    let songs = props.data.songs.map((song, i) => {
      console.log(song.title)
      return (
        <li key={i} className='collection-item'>
          {song.title}
        </li>
      )
    })
    return songs
  }
  if (props.data.loading) {
    return <div>Loading...</div>
  }

  return (
    //    // bundle.js:18365 Error in observer.next Invariant
    //   Violation: Objects are not valid as a React child
    //    If you meant to render a collection of children, use an array instead
    //  // or wrap the object using createFragment(object) from the React add-ons.
      
    //   // This does not work, see above error
    <div>
      {/* <p>{props.data}</p> */}
      <ul className="collection">
      {renderSongs()}
      </ul>
    </div>
  )
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`
console.log(query)

export default graphql(query)(SongList)
