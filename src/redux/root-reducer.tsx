import { combineReducers } from 'redux'

import videoReducer from './video/reducer'
import videoDetailReducer from './video-detail/reducer'

const rootReducer = combineReducers({ videoReducer, videoDetailReducer })

export default rootReducer
