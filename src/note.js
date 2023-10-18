import { insertDB, saveDB, getDB } from "./db.js";

export const newNote = async (note, tags) => {
  const newNote = {
    tags,
    content: note,
    id: Date.now
  }

  await insertDB(newNote)
  return newNote
}

export const getAllNotes = async () => {
  const { notes } = await getDB()
  return notes
}
