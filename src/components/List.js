import React, { useState } from 'react'

const List = ({ todo, deleteTodo, taskComplete }) => {
    const { completed, id, item } = todo;

    const [toggleState, settoggleState] = useState(completed)
    const updateHandler = function () {
        settoggleState(!toggleState);
        const body = { id, item, completed: !toggleState }
        taskComplete(body)
    }
    const deleteHandler = () => {
        deleteTodo(id)
    }

    return (
        <>
            <div className="input-group">
                <input type="text" className="form-control" readOnly value={item} />
                {toggleState ?
                    <button className="btn btn-outline-success" type="button" onClick={() => updateHandler()}>✅</button> : <button className="btn btn-outline-secondary" type="button" onClick={() => updateHandler()}>⏺</button>}
                <button className="btn btn-outline-danger" type="button" onClick={() => deleteHandler()}>❌</button>
            </div>
        </>
    )
}

export default List