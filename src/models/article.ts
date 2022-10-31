import { Tag } from './tags'

export interface Author {
    bio: null | string
    following: boolean
    image: string
    username: string
}

export interface Article {
    author: Author
    body: string
    createdAt: string
    description: string
    favorited: boolean
    favoritesCount: number
    slug: string
    tagList: Tag[]
    title: string
    updatedAt: string
}
