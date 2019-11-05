import React, { Component } from 'react'
import styled from 'styled-components'

export default class BigImage extends Component {
  state = {
    item: null
  };

  componentDidMount() {
    fetch(`${this.props.url}/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(item => this.setState({ item }))
  }

  render () {
    const item = this.state.item
    const Image = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
  `

    return item ? (
      <Image>
        <img src={`${item.url}`} alt={`${item.title}`} />
      </Image>
    ) : ''
  }
}
