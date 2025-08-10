import { VideoAction } from '../video/reducer'
import { VideoDetailState } from '../../types'
import { ADD_COMMENT, SET_COMMENTS, SET_DISLIKES, SET_LIKES, SET_VIDEO_DETAIL } from './actions-types'

const initialState: VideoDetailState = {
  videos: {
    id: 0,
    url: '',
    title: '',
    description: '',
  },
  likes: 0,
  dislikes: 0,
  comments: [
    {
      id: '',
      content: '',
      user: '',
    },
  ],
}

const videoDetailReducer = (state = initialState, action: VideoAction) => {
  switch (action.type) {
    case SET_VIDEO_DETAIL:
      return {
        ...state,
        videos: {
          id: action.payload?.id ?? 0,
          url: action.payload?.url ?? '',
          title: action.payload?.title ?? '',
          description: action.payload?.description ?? '',
        },
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
