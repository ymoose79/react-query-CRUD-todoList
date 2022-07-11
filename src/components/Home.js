import React from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import * as api from '../data/fetchApi'
import InputItem from './InputItem'
import List from './List'


const Example = () => {

    const queryClient = useQueryClient();

    // fetch data
    const { isLoading, error, data } = useQuery('todoList', api.fetchTodos)

    const onListChange = (value) => addTodoMutation.mutate(value)
    const onDeleteItem = (value) => delTodoMutation.mutate(value)
    const onCompletedItem = (value) => updateTodoMutation.mutate(value)

    // Delete / Post methods
    const addTodoMutation = useMutation(api.postTodos, {
        onSuccess: () => {
            queryClient.invalidateQueries('todoList')
        }
    })
    const delTodoMutation = useMutation(api.delTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todoList')
        }
    })
    const updateTodoMutation = useMutation(api.updateTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todoList')
        }
    })

    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className='container bg-secondary pt-5' style={{ minHeight: "50vh" }}>
            <div className='d-flex justify-content-center'>
                <div className="col-md-8  bg-light py-4 px-md-3">
                    <h3>Thing Todo:</h3>
                    {data?.map((todo) => {
                        return <List todo={todo} key={todo.id} deleteTodo={onDeleteItem} taskComplete={onCompletedItem} />
                    })}
                </div>
            </div>
            <InputItem postItem={onListChange} />
        </div>

    )
}


export default Example