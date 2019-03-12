import Discover from '../../assets/Discover.js'
import MovieRequest from '../../assets/MovieRequest.js'
import ResultsGallery from './ResultsGallery.jsx'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchGallery from './SearchGallery.jsx'

class WindowGallery extends Component {

  render () {
    return (
      <div className='gallery-pane'>
        <SearchGallery OnDataChange={this.changedSearch} />
        <ResultsGallery Movies={this.state.movies} />
      </div>
    )
  }

  constructor (props) {
    super(props)

    this.state = {movies: []}
    this.changedSearch = this.changedSearch.bind(this)
  }

  changedSearch (searchData) {
    let paramBuilder = new Discover()
    let params = paramBuilder.page(searchData.page).withGenres(searchData.genres)._sortBy(searchData.sortBy, searchData.sortDirection).includeAdult(false).params

    let movieRequest = new MovieRequest()
    movieRequest.discoverMovies(params).then((response) => {
      let results = response.data.results

      this.setState({
        movies: results.map((elem) => {
          return {
            date: elem.release_date,
            overview: elem.overview,
            id: elem.id,
            img: `https://image.tmdb.org/t/p/original${elem.poster_path}`,
            title: elem.original_title
          }
        })
      })
    })
  }
}

WindowGallery.PropTypes = {
  MovieIds: PropTypes.array.isRequired,
  OnNewIds: PropTypes.func.isRequired
}

export default WindowGallery
