import { useState } from "react"
import styles from "./searchForm.module.scss"

export function SearchForm({ searchTodo }) {
  const [inputState, setInputState] = useState("")

  return (
    <div className={styles.form}>
      <label htmlFor="search_text">Search todo by keywords:</label>
      <input
        value={inputState}
        id="search_text"
        type="text"
        placeholder="enter the text"
        onChange={(e) => {
          setInputState(e.target.value)
          searchTodo(e.target.value)
        }}
      />
    </div>
  )
}
