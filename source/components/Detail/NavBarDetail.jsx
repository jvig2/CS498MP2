import {
  HashRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import styles from '../../styles/Detail/NavBarDetail.scss'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class NavBarDetail extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='description-navbar-box'>
        <Button content='Back' icon='arrow left' labelPosition='left' floated='left' onClick={this.props.OnPrevious} size='small' as={Link} to={`/detail/${Math.max(parseInt(this.props.MovieId) + 1, 0)}`} />
        <Button content='Forward' icon='arrow right' labelPosition='right' floated='right' onClick={this.props.OnNext} size='small' as={Link} to={`/detail/${parseInt(this.props.MovieId) - 1}`} />
      </div>
    )
  }
}

NavBarDetail.PropTypes = {
  OnPrevious: PropTypes.func.isRequired,
  OnNext: PropTypes.func.isRequired
}

export default NavBarDetail
