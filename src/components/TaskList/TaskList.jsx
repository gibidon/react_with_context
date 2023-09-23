import { NavLink } from "react-router-dom"
import styles from "./TaskList.module.scss"

export function TaskList({ tasks }) {
  return (
    <ul className={styles.taskList}>
      {tasks.map((task) => (
        <li key={task.id}>
          <NavLink to={`task/${task.id}`}>{task.title}</NavLink>
        </li>
      ))}
    </ul>
  )
}
