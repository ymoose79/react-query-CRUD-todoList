const { REACT_APP_PUBLIC_URL } = process.env

async function fetchTodos() {
    const data = await fetch(`${REACT_APP_PUBLIC_URL}todoList`).then(res =>
        res.json()
    )
    console.log({ data })
    return data
}
export default fetchTodos;