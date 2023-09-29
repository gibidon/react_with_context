const fetchServer = (
  method,
  { id, sortByNameMode = false, searchMode = false, ...payload } = {},
) => {
  console.log(id, payload)
  let url = "http://localhost:3000/todos"
  let options = { method, headers: { "Content-Type": "application/json;charset=utf-8" } }
  if (method === "POST") {
    options.body = JSON.stringify(payload)
  }
  if (method === "DELETE") {
    url += `/${id}`
  }
  if (method === "PUT") {
    url += `/${id}`
    options.body = JSON.stringify(payload)
  }
  if (sortByNameMode) {
    url += "?_sort=title"
  }
  if (searchMode) {
    console.log("ss", payload.text)
    url += `?q=${payload.text}`
  }

  return fetch(url, options).then((response) => response.json())
}

export const addTodo = (newText) => {
  return fetchServer("POST", { id: "NEW", title: newText })
}
export const removeTodo = (id) => {
  return fetchServer("DELETE", { id: id })
}
export const updateTodo = (id, newTask) => {
  return fetchServer("PUT", { id: id, title: newTask })
}

export const readTodos = () => {
  return fetchServer("GET")
}

export const sortTodos = () => {
  return fetchServer("GET", { sortByNameMode: true })
}

export const searchTodos = (text) => {
  return fetchServer("GET", { searchMode: true, text: text })
}
