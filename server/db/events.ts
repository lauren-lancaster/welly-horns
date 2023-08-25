import connection from './connection'

const db = connection

export function getAllEvents() {
  return db('events').select()
}

export function getEvent(id: number) {
  return db('events').where({ id }).select()
}
