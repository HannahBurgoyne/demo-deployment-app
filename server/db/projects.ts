import connection from './connection.ts'
import { Project } from '../../models/project'

export async function getAllProjects(db = connection): Promise<Project[]> {
  return db('projects').select()
}
