import React from "react"
import styles from "./TaskTemplate.module.scss"
import { useState } from "react"
import { removeHandler } from "../../handlers/removeHandler"

export function TaskTemplate({ title, id }) {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
      {title}: {id}
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => removeHandler(id)}>Delete</button>
    </div>
  )
}
