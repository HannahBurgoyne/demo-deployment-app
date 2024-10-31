import request from 'superagent'
import { Comment } from '../../models/comment'

const rootUrl = '/api/v1'

export function getAllComments(): Promise<Comment[]> {
  return request.get(rootUrl + '/comments').then((res) => {
    return res.body.comments as Comment[]
  })
}
