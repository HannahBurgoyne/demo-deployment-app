import { Router } from 'express'

import * as db from '../db/comments'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const comments = await db.getAllComments()

    res.json({ comments })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', async (req, res) => {
  try {
    const newComment = req.body

    await db.addNewComment(newComment)
    res.sendStatus(201)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
