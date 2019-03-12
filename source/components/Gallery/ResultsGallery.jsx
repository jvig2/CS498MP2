import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import PropTypes from 'prop-types'
import MovieRequest from '../../assets/MovieRequest.js'
import React, { Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

class ResultsGallery extends Component {
  componentWillReceiveProps (nextProps) {
    if (nextProps.Ids !== this.props.Ids) {
      this.cardsFromIds(this.props.Ids)
    }
  }

  render () {
    return (
      <Card.Group>
        {this.cardsFromMovies(this.props.Movies)}
      </Card.Group>
    )
  }

  cardsFromMovies (movies) {
    return movies.map((movie) => {
      return (
        <Card key={movie.id} as={Link} to={`/detail/${movie.id}`}>
          <Image src={movie.img} />
          <Card.Content>
            <Card.Header>
              {movie.title}
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                This movie was released on {movie.date}
              </span>
            </Card.Meta>
            <Card.Description>
              {movie.overview}
            </Card.Description>
          </Card.Content>
        </Card>
      )
    })
  }

  constructor (props) {
    super(props)

    this.cardsFromMovies(this.props.Movies)
    this.state = {
      cards: []
    }
  }
}

ResultsGallery.PropTypes = {
  Movies: PropTypes.array.isRequired
}

export default ResultsGallery
