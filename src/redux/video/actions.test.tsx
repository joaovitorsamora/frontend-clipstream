import { SET_VIDEOS, SET_SEARCH_TERMS } from './actions-types'
import { setVideos, setSeachTerms } from './actions'

describe('Video Actions', () => {
  describe('Actions Types', () => {
    test('should return action type SET_VIDEOS', () => {
      expect(SET_VIDEOS).toEqual('SET_VIDEOS')
    })
    test('should return action type SET_SEARCH_TERMS', () => {
      expect(SET_SEARCH_TERMS).toEqual('SET_SEARCH_TERMS')
    })
  })
  describe('Actions Creators', () => {
    test('should return action creator setVideos', () => {
      const videos = [{ id: 1, url: 'http://example.com', title: 'New Video1', description: 'Anything here...' }]
      const expectedActionVideo = {
        type: SET_VIDEOS,
        payload: videos,
      }
      expect(setVideos(videos)).toEqual(expectedActionVideo)
    })
    test('should return action creator setSeachTerms', () => {
      const terms = ''
      const expectedActionSeacrhTerms = {
        type: SET_SEARCH_TERMS,
        payload: terms,
      }
      expect(setSeachTerms(terms)).toEqual(expectedActionSeacrhTerms)
    })
  })
})
