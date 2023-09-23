import React from "react"
import styles from "./TaskTemplate.module.scss"
import EditTemplate from "../EditTemplate/EditTemplate"
import { useState } from "react"
import { removeHandler } from "../../handlers/removeHandler"

export default function TaskTemplate({ title, id }) {
  const [task, setTask] = useState(title)
  const [isEditing, setIsEditing] = useState(false)
  // return isEditing ? (
  //   <EditTemplate id={id} cancelUpdate={() => cancelUpdateTodo()} />
  // ) : (
  //   <div className={styles.todo} data-id={id}>
  //     <span className={styles.todo_text}>{title}</span>
  //     <button className={styles.todo_edit_btn} onClick={editTodo}>
  //       Edit
  //     </button>
  //     <button className={styles.todo_remove_btn} onClick={removeTodo}>
  //       Delete
  //     </button>
  //   </div>
  // )
  return (
    <div>
      {title}: {id}
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => removeHandler(id)}>Delete</button>
    </div>
  )
}
