import { thunk } from 'redux-thunk'
import { createStore, applyMiddleware, Reducer, Action, combineReducers } from 'redux'

import videoReducer, { VideoState } from './video/reducer'
import videoDetailReducer, { VideoDetailState } from './video-detail/reducer'
import articleReduce, { ArticleState } from './articles/reduce'

export interface RootState {
  videoReducer: VideoState
  videoDetailReducer: VideoDetailState
  articleReduce: ArticleState
}

const rootReducer: Reducer<RootState, Action> = combineReducers({
  videoReducer,
  videoDetailReducer,
  articleReduce,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
