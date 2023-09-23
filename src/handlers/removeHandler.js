export const removeHandler = (id) => {
  fetch(`http://localhost:3000/todos/${id}`, {
    method: "DELETE",
  })
}
