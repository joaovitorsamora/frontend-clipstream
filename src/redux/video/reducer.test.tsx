import videoReducer from './reducer'
import { SET_VIDEOS, SET_SEARCH_TERMS } from './actions-types'

describe('Video Reducer', () => {
  test('should return initial state', () => {
    const initialState = {
      videos: [],
      searchTerms: '',
    }

    const actionsVideo = {
      type: SET_VIDEOS,
      payload: {
        id: 1,
        url: 'http://example.com',
        title: 'New Video1',
        description: 'Anything here...',
      },
    }
    const result = videoReducer(initialState, actionsVideo)
    expect(result).toEqual({
      videos: {
        id: 1,
        url: 'http://example.com',
        title: 'New Video1',
        description: 'Anything here...',
      },
      searchTerms: '',
    })
  })
})
