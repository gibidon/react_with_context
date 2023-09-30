import styles from "./TodoTemplate.module.scss"
import { EditTemplate } from "../EditTemplate/EditTemplate"
import { useState, useContext } from "react"
import { AppContext } from "../../contexts/AppContext"

export const TodoTemplate = ({ id }) => {
  const [isEditing, setIsEditing] = useState(false)
  const { todos, dispatch } = useContext(AppContext)
  const currentTodo = todos.find((todo) => todo.id === id)

  return (
    <>
      <div className={styles.todo} data-id={id}>
        <span className={styles.todo_text}>{currentTodo.title}</span>
        <button className={styles.todo_edit_btn} onClick={() => setIsEditing(true)}>
          Edit
        </button>
        <button
          className={styles.todo_remove_btn}
          onClick={() => dispatch({ type: "REMOVE_TODO", payload: id })}
        >
          Delete
        </button>
      </div>
      {isEditing && (
        <EditTemplate
          cancelTodoUpdate={() => setIsEditing(false)}
          update={(newText) => {
            dispatch({ type: "UPDATE_TODO", payload: { id, newText } })
            setIsEditing(false)
          }}
        />
      )}
    </>
  )
}
