import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import useCreateComment from '../hooks/useCreateComment'
import { Comment } from '../../models/comment'

export default function Form() {
  const [name, setName] = useState<string>('')
  const [text, setText] = useState<string>('')

  const createComment = useCreateComment()

  // Handle changes for both inputs
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  // Function to handle submit in form, prevents default behaviour and updates the comment state.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (name && text && !createComment.isPending) {
      createComment.mutate({ name, text })
      // Reset the form fields
      setName('')
      setText('')
    }
  }

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          value={name}
        />
        <input
          onChange={handleCommentChange}
          type="text"
          name="comment"
          id="comment"
          placeholder="Tell me what you think!"
          value={text}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}
