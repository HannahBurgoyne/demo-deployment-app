import connection from './connection.ts'
import { Comment, NewComment } from '../../models/comment.ts'

export async function getAllComments(db = connection): Promise<Comment[]> {
  return db('comments').select()
}

export async function addNewComment(comment: NewComment, db = connection) {
  return await db('comments').insert(comment)
}
