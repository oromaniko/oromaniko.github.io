import { ArticlesActionCreators } from './articles'
import { TagsActionCreators } from './tags'
import { ArticleActionCreators } from './article'
import { AuthActionCreators } from './auth'

export const allActionCreators = {
    ...ArticlesActionCreators,
    ...TagsActionCreators,
    ...ArticleActionCreators,
    ...AuthActionCreators,
}
