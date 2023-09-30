import { AddTaskForm } from "./components/AddTaskForm/AddTaskForm"
import { SearchForm } from "./components/SearchForm/SearchForm"
import { Sorting } from "./components/Sorting/Sorting"
import styles from "./controlPanel.module.scss"

export const ControlPanel = () => {
  return (
    <div className={styles.controlPanel}>
      <AddTaskForm />
      <SearchForm />
      <Sorting />
    </div>
  )
}
