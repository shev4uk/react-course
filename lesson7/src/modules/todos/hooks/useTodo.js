import { useEffect, useState } from "react"
import { fetchTodo } from "../services/todosService";

export default function useTodo(id) {
    const [todo, setTodo] = useState([]);
    useEffect(() => {
        fetchTodo(id).then(({data}) => setTodo(data)) 
    }, []);

    return {todo}
}