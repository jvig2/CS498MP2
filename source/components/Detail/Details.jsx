import React, { Component } from 'react'
import styles from '../../styles/Detail/Details.scss'
import PropTypes from 'prop-types'

class Details extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='center-horizontal-box'>
        <div className='description-box'>
          <h1 className='description-title'>{this.props.MovieTitle}</h1>
        </div>
        <div className='center-horizontal-box'>
          <img src={this.props.MovieImageSrc} />
        </div>
        <div className='description-box'>
          <p className='description-description'>{this.props.MovieDescription}</p>
        </div>
      </div>
    )
  }
}

Details.PropTypes = {
  MovieDescription: PropTypes.string.isRequired,
  MovieTitle: PropTypes.string.isRequired,
  MovieImageSrc: PropTypes.string.isRequired
}

export default Details
