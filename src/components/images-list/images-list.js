import React from 'react'
import GalleryItem from '../gallery-item'
import styled from 'styled-components'

const ImagesList = ({ items }) => {
  const ImagesContainer = styled.ul `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    list-style: none;
  `,
  ListGroupItem = styled.li `
    width: 250px;
    border: 1px solid black;
    outline: none;
    border-radius: 7px;
    margin-top: 10px;
  `

  const elements = items.map((item) => {
    const id = item.id
    return (
      <ListGroupItem key={id}>
        <GalleryItem
          item={item} />
      </ListGroupItem>
    )
  })

  return (
    <section className='container content'>
      <ImagesContainer>{ elements }</ImagesContainer>
    </section>
  )
}

export default ImagesList
