import articlesReducer from './articles'
import tagsReducer from './tags'
import authReducer from './auth'

const reducers = {
    articles: articlesReducer,
    tags: tagsReducer,
    auth: authReducer,
}

export default reducers
