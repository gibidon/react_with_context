import styles from "./TodoTemplate.module.scss"
import { EditTemplate } from "./EditTemplate"
import { useState, useContext } from "react"
import { AppContext } from "../contexts/AppContext"

export const TodoTemplate = ({ title, removeTodo, id, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false)
  const { todos, dispatch } = useContext(AppContext)

  return (
    <>
      <div className={styles.todo} data-id={id}>
        <span className={styles.todo_text}>{title}</span>
        <button className={styles.todo_edit_btn} onClick={() => setIsEditing(true)}>
          Edit
        </button>
        {/* <button className={styles.todo_remove_btn} onClick={removeTodo}> */}
        <button
          className={styles.todo_remove_btn}
          onClick={() => dispatch({ type: "REMOVE_TODO", payload: id })}
        >
          Delete
        </button>

        {isEditing && (
          <EditTemplate
            cancelTodoUpdate={() => setIsEditing(false)}
            update={(newText) => {
              // updateTodo(newText)
              dispatch({ type: "UPDATE_TODO", payload: { id, newText } })
              setIsEditing(false)
            }}
          />
        )}
      </div>
    </>
  )
}
