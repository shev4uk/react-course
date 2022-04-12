import { useEffect, useState } from "react"
import { fetchTodos } from "../services/todosService";

export default function useTodoList() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetchTodos().then(({data}) => setList(data)) 
    }, []);

    return {list}
}