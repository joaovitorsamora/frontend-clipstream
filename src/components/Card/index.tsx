import React from 'react'
import { Link } from 'react-router-dom'
import { VideoProps } from '../types'
import './styles.css'

export const Card: React.FC<VideoProps> = ({ id, url, title }) => {
  return (
    <Link to={`/pages/VideoDetail/${id}`} className="video-card">
      <iframe
        key={id}
        src={url}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ pointerEvents: 'none', width: '100%', borderRadius: '4px', border: 'none' }}
      />
      <div className="video-card-info">
        <p className="video-card-title">{title}</p>
      </div>
    </Link>
  )
}
