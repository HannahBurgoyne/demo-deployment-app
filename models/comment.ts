export interface NewComment {
  name: string
  text: string
}

export interface Comment extends NewComment {
  id: number
}
