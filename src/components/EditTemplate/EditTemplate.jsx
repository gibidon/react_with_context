import { useState, useContext } from "react"
import styles from "./EditTemplate.module.css"
// import { AppContext } from "../contexts/AppContext"
import { AppContext } from "../../contexts/AppContext"

export const EditTemplate = ({ update, cancelTodoUpdate }) => {
  const [state, setState] = useState("")
  const { todos, dispatch } = useContext(AppContext)

  return (
    <div className={styles.edit_module}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          update(state)
        }}
        className={styles.edit_content}
      >
        {/* <input
          type="text"
          placeholder="edit task"
          value={state}
          onChange={(e) => setState(e.target.value)}
        /> */}
        <textarea
          type="text"
          placeholder="edit task"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <button type="submit">Edit</button>
        <button onClick={cancelTodoUpdate}>Cancel</button>
      </form>
    </div>
  )
}
