import { VideoProps } from '../../types'
import { ADD_COMMENT, SET_COMMENTS, SET_DISLIKES, SET_LIKES, SET_VIDEO_DETAIL } from './actions-types'
import { Comment } from './reducer'

export const setVideoDetail = (videoDetail: VideoProps[]) => ({
  type: SET_VIDEO_DETAIL,
  payload: videoDetail,
})

export const setLikes = (likes: number) => ({
  type: SET_LIKES,
  payload: likes,
})

export const setDislikes = (dislikes: number) => ({
  type: SET_DISLIKES,
  payload: dislikes,
})

export const setComments = (comments: Comment[]) => ({
  type: SET_COMMENTS,
  payload: comments,
})

export const addComment = (comment: Comment) => ({
  type: ADD_COMMENT,
  payload: comment,
})
