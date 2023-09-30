import { useState } from "react"
import styles from "./EditTemplate.module.scss"

export const EditTemplate = ({ update, cancelTodoUpdate }) => {
  const [state, setState] = useState("")

  return (
    <div className={styles.edit_module}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          update(state)
        }}
        className={styles.edit_content}
      >
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
