import {useState} from 'react'

const Form = (props) => {
    const {list,setList} = props
    const [todo,setTodo] = useState({})

    const handleChange = (e) =>{
        setTodo({todo:e.target.value,complete:false})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setList([...list,todo])
        setTodo({todo:""})
    }


return (
    <div>Todo:
    <form onSubmit={handleSubmit}>
        <label htmlFor=''>Todo Item:</label>
        <input onChange={handleChange} type='text' value={todo.todo}></input>
        <button type='submit'>Create Todo </button>
    </form>
    </div>
)
}

export default Form