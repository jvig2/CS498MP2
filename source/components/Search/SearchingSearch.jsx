import { Genres } from '../../assets/Genres.js'
import { SortTypes, DirectionTypes, PageTypes, SmallSortTypes } from '../../assets/SortTypes.js'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dropdown, Grid, Input } from 'semantic-ui-react'

class SearchingSearch extends Component {
  render () {
    return (
      <div className='search-search-pane'>
        <Input fluid loading icon='user' placeholder='Please enter the title you would like to search' onChange={(event, data) => {
          this.setState({text: data.value}, this.props.OnDataChange.bind(this, this.state))
        }} />

        <Grid columns={2} >
          <Grid.Row>
            <Grid.Column>
              <Dropdown defaultValue={'original_title'} fluid selection options={SmallSortTypes} onChange={(event, data) => {
                this.setState({ sortBy: data.value }, this.props.OnDataChange.bind(this, this.state))
              }} />
            </Grid.Column>
            <Grid.Column>
              <Dropdown defaultValue='descending' fluid selection options={DirectionTypes} onChange={(event, data) => {
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
      sortDirection: false,
      text: ''
    }
  }
}

SearchingSearch.PropTypes = {
  OnDataChange: PropTypes.func.isRequired
}

export default SearchingSearch
