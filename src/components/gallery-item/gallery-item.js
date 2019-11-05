import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const GalleryItem = ({ item }) => {
  const ImageContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 15px;
  `,
  ImageParagraph = styled.p `
    color: black;
    text-decoration: none;
  `

  return (
    <Link to={`/${item.id}`}>
      <ImageContainer>
        <img src={`${item.thumbnailUrl}`} alt={`${item.title}`}/>
        <ImageParagraph>
          {item.title}
        </ImageParagraph>
        <ImageParagraph>
          Album Id: {item.albumId}
        </ImageParagraph>
      </ImageContainer>
    </Link>
  )
}

export default GalleryItem
