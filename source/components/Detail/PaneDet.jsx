import styles from '../../styles/Detail/PaneDet.scss'
import Details from './Details.jsx'
import 'semantic-ui-css/semantic.min.css'
import NavBarDetail from './NavBarDetail.jsx'
import MovieRequest from '../../assets/MovieRequest'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class PaneDet extends Component {
  
  render () {
    return (
      <div className='detail-pane'>
        <NavBarDetail MovieId={this.props.MovieId}  OnNext={() => { this.props.OnNext(this.props.MovieId) }} OnPrevious={() => { this.props.OnPrevious(this.props.MovieId) }} />
        <Details MovieDescription={this.state.description} MovieTitle={this.state.title} MovieImageSrc={this.state.posterSrc} />
      </div>
    )
  }
  
  updateMovieId (movieId) {
    let m = new MovieRequest()

    m.getMovieById(movieId).then((response) => {
      this.setState({
        title: response.data.original_title,
        description: response.data.overview,
        posterSrc: `https://image.tmdb.org/t/p/w300${response.data.poster_path}`
      })
    }).catch((err) => {
      console.log(err)
    })
  }

  constructor (props) {
    super(props)

    this.state = {
      title: '',
      description: '',
      posterSrc: ''
    }

    this.updateMovieId(this.props.MovieId)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.MovieId !== this.props.MovieId) {
      this.updateMovieId(nextProps.MovieId)
    }
  }
}

PaneDet.PropTypes = {
  MovieId: PropTypes.number.isRequired,
  OnNext: PropTypes.func.isRequired,
  OnPrevious: PropTypes.func.isRequired
}

export default PaneDet
