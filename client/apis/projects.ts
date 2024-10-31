import request from 'superagent'
import { Project } from '../../models/project'

const rootUrl = '/api/v1'

export function getProjects(): Promise<Project[]> {
  return request.get(rootUrl + '/projects').then((res) => {
    return res.body.projects as Project[]
  })
}
