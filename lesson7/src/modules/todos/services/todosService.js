import api from '../../../api';

export function fetchTodos() {
    return api.get('todos');
}

export function fetchTodo(id) {
    return api.get('todos/'+id)
}