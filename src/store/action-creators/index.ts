import { ArticlesActionCreators } from './articles'
import { TagsActionCreators } from './tags'

export const allActionCreators = {
    ...ArticlesActionCreators,
    ...TagsActionCreators,
}
