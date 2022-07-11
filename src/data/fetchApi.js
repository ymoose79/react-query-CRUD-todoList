const { REACT_APP_PUBLIC_URL } = process.env

export const fetchTodos = () => fetch(`${REACT_APP_PUBLIC_URL}todoList`).then(res => res.json());

export const postTodos = (data) => {
    fetch(`${REACT_APP_PUBLIC_URL}todoList`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
}

export const delTodo = (id) => {
    fetch(`${REACT_APP_PUBLIC_URL}todoList/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
    }).then(res => res.json())
}

export const updateTodo = (data) => {
    fetch(`${REACT_APP_PUBLIC_URL}todoList/${data.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
}