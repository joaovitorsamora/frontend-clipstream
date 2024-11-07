import { VideoAction } from '../video/reducer'
import { VideoProps } from '../../types'
import { ADD_COMMENT, SET_COMMENTS, SET_DISLIKES, SET_LIKES, SET_VIDEO_DETAIL } from './actions-types'

export interface Comment {
  id: string
  content: string
  user: string
}

export interface VideoDetailState {
  videos: VideoProps[]
  likes: number
  dislikes: number
  comments: Comment[]
}

const initialState: VideoDetailState = {
  videos: [],
  likes: 0,
  dislikes: 0,
  comments: [],
}

const videoDetailReducer = (state = initialState, action: VideoAction) => {
  switch (action.type) {
    case SET_VIDEO_DETAIL:
      return {
        ...state,
        videos: action.payload,
      }

    case SET_LIKES:
      return {
        ...state,
        likes: action.payload,
      }

    case SET_DISLIKES:
      return {
        ...state,
        dislikes: action.payload,
      }

    case SET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      }
    case ADD_COMMENT:
      return {
        ...state,
        comments: Array.isArray(action.payload) ? [...action.payload] : [...state.comments, action.payload],
      }
    default:
      return state
  }
}

export default videoDetailReducer
