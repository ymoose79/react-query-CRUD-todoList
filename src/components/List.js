import React from 'react'

const List = ({ todo }) => {
    const { completed, id, item } = todo;
    const check = (e) => console.log(e.target.value)
    return (
        <>
            <div className="input-group">
                <input type="text" className="form-control" value={item} readOnly />
                <button className="btn btn-outline-success" type="button">✅</button>
                <button className="btn btn-outline-danger" type="button">❌</button>
            </div>
        </>
    )
}

export default List