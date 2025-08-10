import { CarouselProps } from '@/src/types'
import { Visibility } from '@mui/icons-material'
import React from 'react'

export const Carousel: React.FC<CarouselProps> = ({ id, title, url, description, site, image, views, onClickLink }) => {
  return (
    <div className="flex flex-col">
      <div className="bg-zinc-900 text-white rounded-xl p-4" key={id}>
        <div className="flex flex-col h-[394px] cursor-pointer" onClick={() => onClickLink(url, id)}>
          <div className="flex flex-col flex-grow">
            <h3 className="text-lg font-bold mb-1">
              {title} - {site} <span className="ml-2 text-sm font-semibold text-zinc-400">{views}</span>
              <Visibility style={{ color: '#fff', marginLeft: '0.5rem' }} />
            </h3>
            <p className="text-sm text-zinc-300">{description}</p>
          </div>
          <div className="mt-auto overflow-hidden">
            <img src={image} alt={title} className="w-full object-contain object-center rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}
