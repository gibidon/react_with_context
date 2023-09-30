import { useContext } from "react"
import { AppContext } from "../../../../contexts/AppContext"
import styles from "./sorting.module.scss"

export const Sorting = () => {
  const { dispatch } = useContext(AppContext)

  return (
    <>
      <button
        onClick={() => dispatch({ type: "SORT_TODOS", payload: {} })}
        className={styles.sortBtn}
      >
        Sort todos by name
      </button>
    </>
  )
}
