import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
import { NewComment } from '../../models/comment'

export default function useCreateComment() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (values: NewComment) => {
      const res = await request.post('/api/v1/comments/').send(values)
      return res.body
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] })
    },
  })
}
