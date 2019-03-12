import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import Genres from '../../assets/Genres' 
import PaneDet from '../Detail/PaneDet.jsx'
import WindowGallery from '../Gallery/WindowGallery.jsx'
import WindowSearch from '../Search/WindowSearch.jsx'
import React, { Component } from 'react'
import { Button, Divider, Segment } from 'semantic-ui-react'
import styles from '../../styles/Home/Home.scss'

class Home extends Component {
  render () {
    return (
      <Router className='routing-pane'>
        <div className='Home'>

          <Segment>
            
            <h1>Welcome to Jaskirat Vig's Clear REACTive app built using the TMDB API!</h1>
            <h3>Use this website to be able to search any title with the following two modes: Direct Search and Window Pane</h3>

            <Button.Group labeled fluid>
              <Button content='Click here for the Direct Search format' size='big' as={Link} to='/search' />
              <Button content='Click here for the Window Pane format' size='big' as={Link} to={'/gallery'} />
            </Button.Group>

            <Route exact path='' render={() => {
              return <Redirect to='/search' />
            }} />

            <Route exact path='/' render={() => {
              return <Redirect to='/search' />
            }} />

            <Route path='/search' render={() => { return <WindowSearch /> }} />

            <Route path='/gallery' render={() => { return <WindowGallery OnNewIds={this.onNewIds} /> }} />

            <Route path='/detail/:id' render={({ match }) => {
              return <PaneDet MovieId={match.params.id} OnPrevious={this.onPrevious} OnNext={this.onNext} />
            }} />

          </Segment>

        </div>
      </Router>
    )
  }

    onNext (id) {
    
  }

  onPrevious (id) {
    
  }

  constructor (props) {
    super(props)

    this.onPrevious = this.onPrevious.bind(this)
    this.onNewIds = this.onNewIds.bind(this)
    this.onNext = this.onNext.bind(this)
  }
  
  onNewIds (ids) {
    this.setState({
      movieIdList: ids
    })
  }
}

export default Home
