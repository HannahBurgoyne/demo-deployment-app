import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Form from './Form'
import useCreateComment from '../hooks/useCreateComment'
import { getAllComments } from '../apis/comments'

export default function Comments() {
  const { data, isPending, isError } = useQuery({
    queryKey: ['comments'],
    queryFn: getAllComments,
  })

  console.log(data)

  if (isPending) return <p>...Loading</p>

  if (isError) return <p>Whoops! Cannot load comments</p>

  if (data)
    return (
      <section className="comments-page">
        <h2>Feedback!</h2>
        {data.map((comment) => (
          <section className="comment" key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.text}</p>
          </section>
        ))}
        <Form />
      </section>
    )
}
