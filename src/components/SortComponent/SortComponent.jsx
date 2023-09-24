import styles from "./sortComponent.module.scss"

export function SortComponent({ sortTasks }) {
  return (
    <>
      <button onClick={() => sortTasks()} className={styles.sortBtn}>
        Sort todos by name
      </button>
    </>
  )
}
