import axios from 'axios'
import { useEffect, useState } from 'react'
import { setVideos } from '../redux/video/actions'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '../redux/store'
import { VideoAction } from '../redux/video/reducer'
import { LinksProps, useFetchDataProps } from '../types'

export const useFetchData = ({ urls }: useFetchDataProps) => {
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, VideoAction>>()
  const [loading, setLoading] = useState(true)
  const [previewData, setPreviewData] = useState<LinksProps[]>([])

  useEffect(() => {
    setLoading(true)
    Promise.all([
      axios.get('https://backend-clipstream.vercel.app/videos'),
      axios.get('https://backend-clipstream.vercel.app/api/articles'),
    ])
      .then(([videoRes, articleRes]) => {
        dispatch(setVideos(videoRes.data))
        setPreviewData(articleRes.data)
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
    previewData,
  }
}
