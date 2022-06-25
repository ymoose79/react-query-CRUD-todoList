import React from 'react'
import { useQuery } from 'react-query'

const { REACT_APP_PUBLIC_URL } = process.env


const Example = () => {
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch(`${REACT_APP_PUBLIC_URL}todoList`).then(res =>
            res.json()
        )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    const check = () => console.log(data)

    return (
        <>
            <div className='container-lg text-center'>
                <div className='container mt-5'>
                    <h1 className='display-1'>Todo List</h1>
                    <h2 className='text-muted'>using JSON server, reactQuery</h2>
                </div>
                <hr />
                <div className='container'>
                    <button className="btn btn-outline-info" onClick={check}>check</button>
                </div>
                {data.map((list, i) => {
                    return <p key={i}>{list.todo}</p>
                })}
            </div>
        </>
    )
}


export default Example