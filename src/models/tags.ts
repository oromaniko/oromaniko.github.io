export enum TagEnum {
    implementation = 'implementations',
    welcome = 'welcome',
    introduction = 'introduction',
    codebaseShow = 'codebaseShow',
    ipsum = 'ipsum',
    qui = 'qui',
    et = 'et',
    quia = 'quia',
    cupiditate = 'cupiditate',
    deserunt = 'deserunt',
}

export type Tag =
    | 'implementations'
    | 'welcome'
    | 'introduction'
    | 'codebaseShow'
    | 'ipsum'
    | 'qui'
    | 'et'
    | 'quia'
    | 'cupiditate'
    | 'deserunt'

export interface Tags {
    tags: Tag[]
}
