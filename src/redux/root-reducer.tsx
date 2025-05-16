import { combineReducers } from 'redux'

import videoReducer from './video/reducer'
import videoDetailReducer from './video-detail/reducer'
import articleReduce from './articles/reduce'

const rootReducer = combineReducers({ videoReducer, videoDetailReducer, articleReduce })

export default rootReducer
