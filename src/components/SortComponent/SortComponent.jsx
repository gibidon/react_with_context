import { sortHandler } from "../../handlers"

export function SortComponent({ sortTasks }) {
  return (
    <>
      <button onClick={() => sortTasks()} className="sortBtn">
        Sort todos by name
      </button>
    </>
  )
}
