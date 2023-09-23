import React from "react"
import { useState } from "react"
import styles from "./EditTemplate.module.css"

export function EditTemplate({ edit, cancelUpdate }) {
  const [state, setState] = useState("")
  return (
    <div className={styles.edit_module}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          edit(state)
        }}
        className={styles.edit_content}
      >
        <input
          type="text"
          placeholder="edit task"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <button type="submit">Edit</button>
        <button onClick={cancelUpdate}>Cancel</button>
      </form>
    </div>
  )
}
