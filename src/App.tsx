import React, { useMemo, useEffect } from 'react'
import { Header, FilteredVideos, Articles } from './components'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { setVideos, setSeachTerms } from './redux/video/actions'
import { setArticles } from './redux/articles/actions'
import rootReducer from './redux/root-reducer'
import { ThunkDispatch } from 'redux-thunk'
import type { RootState } from './redux/store'
import { VideoAction } from './redux/video/reducer'
import { LinksProps, VideoProps } from './types'
import { useFilteredVideos } from './hooks/useFilteredVideos'
import { useFetchData } from './hooks/useFetchData'

export const App = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, VideoAction>>()
  const { videos, searchTerms } = useSelector((state: ReturnType<typeof rootReducer>) => state.videoReducer)
  const { filteredVideoList } = useFilteredVideos(videos, searchTerms)
  const { articles } = useSelector((state: ReturnType<typeof rootReducer>) => state.articleReduce)

  const urls = useMemo(
    () => ['https://backend-clipstream.vercel.app/videos', 'https://backend-clipstream.vercel.app/api/articles'],
    []
  )

  const { previewData, loading } = useFetchData({ urls })

  useEffect(() => {
    if (Array.isArray(previewData[0]) && previewData[0] !== videos) {
      dispatch(setVideos(previewData[0] as VideoProps[]))
    }
    if (Array.isArray(previewData[1]) && previewData[1] !== articles) {
      dispatch(setArticles(previewData[1] as LinksProps[]))
    }
  }, [previewData])

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSeachTerms(event.target.value))
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (!previewData) {
    return <p>Failed to fetch link preview.</p>
  }

  return (
    <div className="container">
      <Header title="ClipStream" placeholder="Search here..." onChange={onChangeInput} value={searchTerms} />
      <main className="main">
        <FilteredVideos />
        <Articles />
      </main>
      <footer>Copyright 2024 &copy; - ClipStream</footer>
    </div>
  )
}
