import { SET_SEARCH_ARTICLES } from './actions-types'
import { LinksProps } from '../../types'

export const setArticles = (articles: LinksProps[]) => ({
  type: SET_SEARCH_ARTICLES,
  payload: articles,
})
