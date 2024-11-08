import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Card, P5Sketch, Title } from './components'
import './App.css'
import MenuIcon from '@mui/icons-material/Menu'
import { useDispatch, useSelector } from 'react-redux'
import { setVideos, setSeachTerms } from './redux/video/actions'
import rootReducer from './redux/root-reducer'
import { ThunkDispatch } from 'redux-thunk'
import type { RootState } from './redux/store'
import { VideoAction } from './redux/video/reducer'
import { LinksProps } from './types'

export const App = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, VideoAction>>()
  const { videos, searchTerms } = useSelector((state: ReturnType<typeof rootReducer>) => state.videoReducer)
  console.log(videos)
  const [filteredVideos, setFilteredVideos] = useState(videos)
  const carousel = useRef(null)
  const [previewData, setPreviewData] = useState<LinksProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://backend-clipstream.vercel.app/videos')
      .then((response) => {
        const data = response.data
        dispatch(setVideos(data))
      })
      .catch((error) => {
        console.error(error)
      })
  }, [dispatch])

  useEffect(() => {
    axios
      .get('https://backend-clipstream.vercel.app/api/articles')
      .then((response) => {
        setPreviewData(response.data)
        setLoading(false)
        console.log(previewData)
      })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    const filtered = videos.filter((video) => video.title.toLowerCase().includes(searchTerms.toLowerCase()))
    setFilteredVideos(filtered)
  }, [videos, searchTerms])

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSeachTerms(event.target.value))
  }

  const handleLeftClick = (event: React.MouseEvent) => {
    event.preventDefault()
    if (carousel.current) {
      ;(carousel.current as HTMLElement).scrollLeft -= (carousel.current as HTMLElement).offsetWidth
    }
  }

  const handleRightClick = (event: React.MouseEvent) => {
    event.preventDefault()
    if (carousel.current) {
      ;(carousel.current as HTMLElement).scrollLeft += (carousel.current as HTMLElement).offsetWidth
    }
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (!previewData) {
    return <p>Failed to fetch link preview.</p>
  }

  const handleClickLink = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <div className="container">
      <header className="header-container">
        <P5Sketch>
          <MenuIcon className="menu-icon" />
          <Title level={3} className="video-title">
            ClipStream
          </Title>
          <input
            className="video-input-search"
            type="text"
            onChange={onChangeInput}
            value={searchTerms}
            placeholder="Pesquisar..."
          />
        </P5Sketch>
      </header>
      <main className="main">
        <section className="video-list">
          {filteredVideos.map((video, index) => {
            console.log(video)
            return (
              <div className="card" key={index}>
                <Card id={video.id} url={video.url} title={video.title} />
              </div>
            )
          })}
        </section>
        <section className="carousel-container">
          <div id="carousel" className="carousel" ref={carousel}>
            {previewData.map((item: LinksProps) => {
              const { id, title, url, description, site, image } = item
              return (
                <div className="item" key={id}>
                  <div className="item-container" onClick={() => handleClickLink(url)}>
                    <div className="info">
                      <h3 className="title">
                        {title} - {site}
                      </h3>
                      <span className="description">{description}</span>
                    </div>
                    <div className="image">
                      <img src={image} alt={title} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="buttons">
            <button onClick={handleLeftClick}>
              <img src="/iconmonstr-arrow-24-240.png" alt="arrow" />
            </button>
            <button onClick={handleRightClick}>
              <img src="/iconmonstr-arrow-24-240.png" alt="arrow" />
            </button>
          </div>
        </section>
      </main>
      <footer>Copyright 2024 &copy; - ClipStream</footer>
    </div>
  )
}
