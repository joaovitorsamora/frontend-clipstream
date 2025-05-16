import { SET_SEARCH_ARTICLES } from './actions-types'
import { LinksProps } from '../../types'

export interface ArticleState {
  articles: LinksProps[]
}

const initialState: ArticleState = {
  articles: [],
}

interface ArticlesProps {
  type: string
  payload?: any
}

const articleReduce = (state = initialState, action: ArticlesProps): ArticleState => {
  switch (action.type) {
    case SET_SEARCH_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      }

    default:
      return state
  }
}

export default articleReduce
