export const createTaskHandler = (newText, state) => {
  console.log("state in createHandler", state)

  fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({ title: newText }),
  }).then(state.setRefreshState(!state.refreshState))
}
