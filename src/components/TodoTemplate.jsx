import styles from "./TodoTemplate.module.scss"
import { EditTemplate } from "./EditTemplate"
import { useState } from "react"

export const TodoTemplate = ({ title, removeTodo, id, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <>
      <div className={styles.todo} data-id={id}>
        <span className={styles.todo_text}>{title}</span>
        <button className={styles.todo_edit_btn} onClick={() => setIsEditing(true)}>
          Edit
        </button>
        <button className={styles.todo_remove_btn} onClick={removeTodo}>
          Delete
        </button>

        {isEditing && (
          <EditTemplate
            cancelTodoUpdate={() => setIsEditing(false)}
            update={(newText) => {
              updateTodo(newText)
              setIsEditing(false)
            }}
          />
        )}
      </div>
    </>
  )
}
