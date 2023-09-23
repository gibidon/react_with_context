export function CreateTaskLayout({ createTask, setInput, input }) {
  return (
    <form
      className="add_task"
      onSubmit={(e) => {
        e.preventDefault()
        createTask()
      }}
    >
      <label htmlFor="add_task">Add new todo:</label>
      <input
        value={input}
        id="add_task"
        type="text"
        placeholder="enter new task"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add todo</button>
    </form>
  )
}
