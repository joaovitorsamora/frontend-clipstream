import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, P5Sketch, Title } from './components'
import './App.css'
import { VideoProps } from './components/types'
import MenuIcon from '@mui/icons-material/Menu'

export const App = () => {
  const [videos, setVideos] = useState<VideoProps[]>([])
  const [data, setData] = useState<VideoProps[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')

  useEffect(() => {
    axios
      .get('https://backend-clipstream.vercel.app/videos')
      .then((response) => {
        setVideos(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  useEffect(() => {
    const results = videos.filter((video) => video.title.toLowerCase().includes(searchTerm.toLowerCase()))
    setData(results)
  }, [videos, searchTerm])

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="main">
      <header className="header-container">
        <P5Sketch>
          <MenuIcon className="menu-icon" />
          <Title className="video-title">Meu Youtube</Title>
          <input
            className="video-input-search"
            type="text"
            onChange={onChangeInput}
            value={searchTerm}
            placeholder="Pesquisar..."
          />
        </P5Sketch>
      </header>
      <section className="video-list">
        {data.map((video, index) => (
          <div className="card" key={index}>
            {<Card id={video.id} url={video.url} title={video.title} />}
          </div>
        ))}
      </section>
    </div>
  )
}
