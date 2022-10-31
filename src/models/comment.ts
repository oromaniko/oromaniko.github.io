import { Author } from './article'

export interface Comment {
    author: Author
    body: string
    createdAt: string
    id: number
    updatedAt: string
}
