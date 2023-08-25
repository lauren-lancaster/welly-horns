import express from 'express'
import * as db from '../db/events'

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const allEvents = await db.getAllEvents()
    res.json(allEvents)
  } catch (e) {
    next(e)
  }
})

router.get('/:id', async (req, res, next) => {
  const id = +req.params.id
  try {
    const event = await db.getEvent(id)
    res.json(event)
  } catch (e) {
    next(e)
  }
})

export default router
