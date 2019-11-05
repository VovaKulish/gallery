import React, { Component } from 'react'

export default class Header extends Component {
  state = {
    term: ''
  };

  onTermChange = (e) => {
    const {onSearchChange = () => {}} = this.props
    this.setState({
      term: e.target.value
    })

    onSearchChange(e.target.value)
  };

  render() {
    return (
      <header>
        <input type='text'
          className='form-control search-input'
          placeholder='Type to search'
          value={this.state.term}
          onChange={this.onTermChange} />
      </header>
    )
  };
}
