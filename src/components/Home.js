import React from 'react'
import { useQuery } from 'react-query'
import fetchTodos from '../data/fetchApi'
import List from './List'


const Example = () => {

    const { isLoading, error, data } = useQuery('repoData', fetchTodos)

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


    const check = () => console.log(data)

    return (
        <div className='container bg-secondary' style={{ minHeight: "50vh" }}>
            <hr />
            <button className="btn btn-outline-info" onClick={check}>check</button>
            <div className='d-flex justify-content-center'>
                <div className="col-md-6 bg-light py-4 px-5">
                    <h3>Thing Todo:</h3>
                    {data.map((todo) => {
                        return <List todo={todo} key={todo.id} />
                    })}
                </div>
            </div>
            <div className='d-flex justify-content-center mt-5'>
                <div className='col-md-6'>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter Todo Item" aria-label="Enter Todo Item" aria-describedby="button-addon2" />
                        <button className="btn btn-success" type="button" id="button-addon2">Submit</button>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Example