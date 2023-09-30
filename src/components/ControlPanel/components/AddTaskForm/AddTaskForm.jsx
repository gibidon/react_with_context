import { useState, useContext } from "react"
import { AppContext } from "../../../../contexts/AppContext"
import styles from "./addTaskForm.module.scss"

export const AddTaskForm = () => {
  const [inputState, setInputState] = useState("")
  const { dispatch } = useContext(AppContext)

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault()
        dispatch({ type: "ADD_TODO", payload: inputState })
        setInputState("")
      }}
    >
      <label htmlFor="add_todo">Add new todo:</label>
      <input
        value={inputState}
        id="add_todo"
        type="text"
        placeholder="enter new todo"
        onChange={(e) => setInputState(e.target.value)}
      />
      <button type="submit" className={styles.formBtn}>
        Add todo
      </button>
    </form>
  )
}
