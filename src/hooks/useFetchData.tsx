import axios from 'axios'
import { useEffect, useState } from 'react'
import { setVideos } from '../redux/video/actions'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '../redux/store'
import { VideoAction } from '../redux/video/reducer'
import { LinksProps } from '../types'

export const useFetchData = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, VideoAction>>()
  const [loading, setLoading] = useState(true)
  const [articlesData, setArticlesData] = useState<LinksProps[]>([])

  const url_videos = process.env.REACT_APP_API_URL_VIDEOS as string
  const url_articles = process.env.REACT_APP_API_URL_ARTICLES as string

  useEffect(() => {
    setLoading(true)
    Promise.all([axios.get(url_videos), axios.get(url_articles)])
      .then(([videoRes, articleRes]) => {
        dispatch(setVideos(videoRes.data))
        setArticlesData(articleRes.data)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [dispatch])

  return {
    loading,
    articlesData,
    setArticlesData,
  }
}
