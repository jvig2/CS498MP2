import SearchObj from '../../assets/SearchObj.js'
import MovieRequest from '../../assets/MovieRequest.js'
import SearchingSearch from './SearchingSearch.jsx'
import ResultsSearch from './ResultsSearch.jsx'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class WindowSearch extends Component {

  render() {
    return (
      <div className='search-pane'>
        <SearchingSearch OnDataChange={this.changedSearch} />
        <ResultsSearch Movies={this.state.movies} />
      </div>
    )
  }

  constructor(props) {
    super(props)

    this.state = { movies: [] }
    this.changedSearch = this.changedSearch.bind(this)
  }

  changedSearch(searchData) {
    let paramBuilder = new SearchObj()
    let params = paramBuilder.query(searchData.text)
      .params

    let movieRequest = new MovieRequest()
    movieRequest.searchMovies(params).then((response) => {
      let results = response.data.results.map((elem) => {
        return {
          id: elem.id,
          img: `https://image.tmdb.org/t/p/original${elem.poster_path}`,
          title: elem.original_title,
          date: elem.release_date,
          overview: elem.overview,
          popularity: elem.popularity
        }
      })
      
      results = results.sort((a, b) => {
        let diff = 0
        switch (searchData.sortBy) {
          case 'popularity':
            diff =  a.popularity - b.popularity
          case 'release_date': 
            diff = Date.parse(a.date) < Date.parse(b.date) ? -1 : 1
          case 'original_title': 
            diff = a.title < b.title ? -1 : 1
        }
        return diff * ((searchData.sortDirection) ? 1 : -1) 
      })

      this.setState({
        movies: results
      })
    })
  }
}

WindowSearch.PropTypes = {
  OnNewIds: PropTypes.func.isRequired,
  MovieIds: PropTypes.array.isRequired
}

export default WindowSearch
