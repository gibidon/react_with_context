import styles from "./MainPage.module.scss"
import { CreateTaskForm, SortComponent, SearchForm, TaskList } from "../../components"
import { createTaskHandler, sortHandler, searchHandler } from "../../handlers"

export const MainPageLayout = ({ tasks, state }) => (
  <div className={styles.mainPage}>
    <h3>Main page</h3>
    <TaskList tasks={tasks} />
    <CreateTaskForm createTask={(text) => createTaskHandler(text, state)} state={state} />
    <SortComponent sortTasks={() => sortHandler(state)} />
    <SearchForm searchTodo={(text) => searchHandler(state, text)} />
  </div>
)
