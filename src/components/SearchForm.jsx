import { useState, useContext } from "react"
import { AppContext } from "../contexts/AppContext"

export const SearchForm = ({ searchTodo }) => {
  const [inputState, setInputState] = useState("")
  const { todos, dispatch } = useContext(AppContext)

  return (
    <div>
      <label htmlFor="search_text">Search todo by keywords:</label>
      <input
        value={inputState}
        id="search_text"
        type="text"
        placeholder="enter the text"
        onChange={(e) => {
          setInputState(e.target.value)
          // searchTodo(e.target.value)
          dispatch({ type: "SEARCH_TODO", payload: e.target.value })
        }}
      />
    </div>
  )
}
