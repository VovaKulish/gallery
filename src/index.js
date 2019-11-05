import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import ImagesList from './components/images-list'
import BigImage from './components/big-image'
import Header from './components/header'

export default class Gallery extends Component {
  state = {
    items: [],
    search: ''
  };

  static propTypes = {
    url: PropTypes.string
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(items => this.setState({ items }))
  }

  onSearchChange = (search) => {
    this.setState({ search })
  };

  searchItems(items, search) {
    if (search.length === 0) {
      return items
    }

    return items.filter((item) => {
      return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1
    })
  }

  render () {
    const { items, search } = this.state
    const visibleItems = this.searchItems(items, search)

    return (
      <div>

        <Router>
          <Route exact path={`/`} render={() => {
            return (
              <div className='gallery-app'>
                <Header onSearchChange={this.onSearchChange} />
                <ImagesList items={visibleItems} />
              </div>)
          }
          } />
          <Route path={`/:id`} render={(props) => <BigImage {...props} url={this.props.url} />} />
        </Router>
      </div>
    )
  }
}
