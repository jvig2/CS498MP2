import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import PropTypes from 'prop-types'
import MovieRequest from '../../assets/MovieRequest.js'
import React, { Component } from 'react'
import { Button, Item, Image } from 'semantic-ui-react'

class SearchResultsPane extends Component {

  render() {
    return (
      <Item.Group>
        {this.itemsFromMovies(this.props.Movies)}
      </Item.Group>
    )
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.Ids !== this.props.Ids) {
      this.cardsFromIds(this.props.Ids)
    }
  }

  itemsFromMovies(movies) {
    return movies.map((movie) => {
      return (
        <Item as={Link} to={`/detail/${movie.id}`}>
          <Item.Image size='small' src={movie.img} />

          <Item.Content>
            <Item.Header as='a'>{movie.title}</Item.Header>
            <Item.Description>
              <p>{movie.overview}</p>
            </Item.Description>
            <Item.Extra>{movie.date}</Item.Extra>
          </Item.Content>
        </Item>
      )
    })
  }

  constructor(props) {
    super(props)

    this.itemsFromMovies(this.props.Movies)
    this.state = {
      cards: []
    }
  }
}

SearchResultsPane.PropTypes = {
  Movies: PropTypes.array.isRequired
}

export default SearchResultsPane
