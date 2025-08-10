import { thunk } from 'redux-thunk'
import { createStore, applyMiddleware, Reducer, Action, combineReducers } from 'redux'

import { VideoDetailState } from '../types'
import videoReducer, { VideoState } from './video/reducer'
import videoDetailReducer from './video-detail/reducer'

export interface RootState {
  videoReducer: VideoState
  videoDetailReducer: VideoDetailState
}

const rootReducer: Reducer<RootState, Action> = combineReducers({
  videoReducer,
  videoDetailReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
