import styles from "./MainPage.module.scss"
import "../../components/TaskTemplate/TaskTemplate"
import { NavLink } from "react-router-dom"
import CreateTaskForm from "../../components/CreateTaskForm/CreateTaskForm"
import { SortComponent } from "../../components/SortComponent/SortComponent"
import { createTaskHandler, sortHandler, searchHandler } from "../../handlers"
import SearchForm from "../../components/SearchForm"

export const MainPageLayout = ({ tasks, state }) => (
  <div className={styles.mainPage}>
    <h3>Main page</h3>
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className={styles.task}>
          <NavLink to={`task/${task.id}`}>{task.title}</NavLink>
        </li>
      ))}
    </ul>
    <CreateTaskForm addTask={(text) => createTaskHandler(text, state)} state={state} />
    <SortComponent sortTasks={() => sortHandler(state)} />
    <SearchForm searchTodo={(text) => searchHandler(state, text)} />

    {/* searchTasks */}
  </div>
)
