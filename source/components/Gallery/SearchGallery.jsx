import { Dropdown, Grid } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { Genres } from '../../assets/Genres.js'
import { SortTypes, DirectionTypes, PageTypes } from '../../assets/SortTypes.js'
import React, { Component } from 'react'

class SearchGallery extends Component {
  
  render () {
    return (
      <div className='gallery-search-pane'>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Dropdown defaultValue={'original_title'} fluid selection options={SortTypes} onChange={(event, data) => {
                this.setState({sortBy: data.value}, this.props.OnDataChange.bind(this, this.state))
              }} />
              <Dropdown defaultValue='ascending' fluid selection options={DirectionTypes} onChange={(event, data) => {
                this.setState({sortDirection: data.value === 'ascending'}, this.props.OnDataChange.bind(this, this.state))
              }} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }

  constructor (props) {
    super(props)

    this.state = {
      sortBy: 'original_title',
      genres: [],
      sortDirection: false,
      page: 1
    }

    this.props.OnDataChange(this.state)
  }

}

SearchGallery.PropTypes = {
  OnDataChange: PropTypes.func.isRequired
}

export default SearchGallery
