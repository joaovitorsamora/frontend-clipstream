import { SET_SEARCH_TERMS, SET_VIDEOS } from './actions-types'
import { VideoProps } from '../../types'

export const setVideos = (videos: VideoProps[]) => ({
  type: SET_VIDEOS,
  payload: videos,
})

export const setSeachTerms = (term: string) => ({
  type: SET_SEARCH_TERMS,
  payload: term,
})
