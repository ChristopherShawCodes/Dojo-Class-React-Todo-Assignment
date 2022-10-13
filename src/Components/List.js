import React from 'react'

const List = (props) => {
    const {list,setList} = props

    const handleDelete=(index)=>{
        const newList = list.filter((item,idx)=>(idx !== index))
        setList(newList)
    }

    const handleToggle=(index)=>{
        const mutList = [...list]
        mutList[index].complete = !mutList[index].complete
        setList(mutList)
    }

    const todoComplete = {
        textDecoration:'line-through'
    }


    return (
    <div>
    List

        {
            list.map((item,idx) => (
            <div>
                <input type="checkbox" onClick={()=>handleToggle(idx)}/>complete
                <p style={item.complete ? todoComplete: null}>{item.todo}</p>
                <button onClick={()=>handleDelete(idx)}>Delete</button>
            </div> 
            ))
        }


    </div>
    )
}

export default List