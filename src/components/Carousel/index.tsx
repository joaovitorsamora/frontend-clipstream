import { CarouselProps } from '@/src/types'
import './styles.css'
import { Visibility } from '@mui/icons-material'
import React from 'react'

export const Carousel: React.FC<CarouselProps> = ({ id, title, url, description, site, image, views, onClickLink }) => {
  return (
    <div className="swiper-styles">
      <div className="item" key={id}>
        <div className="item-container" onClick={() => onClickLink(url, id)}>
          <div className="info">
            <h3 className="title">
              {title} - {site} <span className="views">{views}</span>
              <Visibility style={{ color: '#000', marginLeft: '2%' }} />
            </h3>
            <span className="description">{description}</span>
          </div>
          <div className="image">
            <img src={image} alt={title} />
          </div>
        </div>
      </div>
    </div>
  )
}
