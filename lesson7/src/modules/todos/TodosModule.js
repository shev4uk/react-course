import { Routes, Route } from 'react-router-dom';

import TodoListPage from './pages/TodoListPage';
import TodoDetailPage from './pages/TodoDetailPage';

export default function TodosModule() {
  return (
    <Routes>
        <Route path='' element={<TodoListPage />} />
        <Route path=':id' element={<TodoDetailPage />} />
    </Routes>
  )
}
