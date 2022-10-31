import articlesReducer from './articles'
import tagsReducer from './tags'
import authReducer from './auth'
import articleReducer from './article'

const reducers = {
    articles: articlesReducer,
    tags: tagsReducer,
    auth: authReducer,
    article: articleReducer,
}

export default reducers
