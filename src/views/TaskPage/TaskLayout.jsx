import EditTemplate from "../../components/EditTemplate/EditTemplate"
import { editHandler } from "../../handlers"

export function TaskLayout({
  taskState,
  removeTask,
  moveBack,
  editingNow,
  setEditingNow,
}) {
  return (
    <>
      <div>{taskState.title}</div>
      <button onClick={() => setEditingNow(true)}>edit</button>
      <button onClick={() => removeTask()}>delete</button>
      <button onClick={() => moveBack()}>back</button>

      {editingNow && (
        <EditTemplate
          cancelUpdate={() => setEditingNow(false)}
          edit={(newValue) => {
            editHandler(newValue, taskState.id)
            setEditingNow(false)
          }}
        />
      )}
    </>
  )
}
