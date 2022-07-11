import React, { useState } from 'react'

const InputItem = ({ postItem }) => {

    const [todoItem, settodoItem] = useState("")
    const handleSubmit = function (e) {
        e.preventDefault();
        const body = { item: todoItem, completed: false }
        postItem(body)
        settodoItem("")
    }

    return (
        <div className='d-flex justify-content-center mt-3'>
            <div className='col-md-6 pb-5'>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        placeholder="Enter Todo Item:"
                        className='form-control'
                        required
                        value={todoItem}
                        onChange={(e) => settodoItem(e.target.value)}
                    />
                </form>
            </div>
        </div>
    )
}

export default InputItem