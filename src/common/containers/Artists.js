import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { queryArtist } from '../actions/index';
import SearchBar from '../components/SearchBar';
import Grid from '../components/Grid';
import Tile from '../components/Tile';


class Artists extends Component {
    constructor(props) {
      super(props)
    }
    componentDidMount() {
        console.log('querying');
        this.props.queryArtist("taylor");
    }
    renderSearchResults () {
    if (!this.props.artists.length) {
      return <div> No artists found </div>
    } else {
      return (
        <Grid>
          {
            this.props.artists.map((artist) => {
              return (
                <Tile
                    name={artist.artistName}
                    description={artist.description}
                    imgSrc={artist.imgSrc}
                    key={artist.artistName}
                />
              )
            })
          }
        </Grid>
      )
    }
  }
  render () {
    return (
      <div>
        <SearchBar query={this.props.queryArtist}/>
        <Grid>
          {
            this.props.artists.map((artist) => {
              return (
                <Tile
                    name={artist.artistName}
                    description={artist.description}
                    imgSrc={artist.imgSrc}
                    key={artist.artistName}
                />
              )
            })
          }
        </Grid>
      </div>
    )
  }
}

// Equivalent to setting state from store, except maps redux to props
function mapStateToProps(state) {
  return {
    artists: state.artists
  };
}

// Makes whatever is returned available as props to the this Container
function mapDispatchToProps(dispatch) {
  // Whenever queryArtist is called, result should be passed to all of our reducers
  // Make sure the result of queryArtist flows through the dispatch function, and funnels it to all the
  // reducers of the app
  return bindActionCreators({ queryArtist }, dispatch);
}

// Promote Artists from a component to a Container, makes dispatch method queryArtist available as a prop
// Connect takes in a function and returns a function
export default connect(mapStateToProps, mapDispatchToProps)(Artists);
