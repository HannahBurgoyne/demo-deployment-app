import { useQuery } from '@tanstack/react-query'
import { getProjects } from '../apis/projects.ts'

export function useProjects() {
  const query = useQuery({ queryKey: ['projects'], queryFn: getProjects })
  return {
    ...query,
    // Extra queries go here e.g. addFruit: useAddFruit()
  }
}
