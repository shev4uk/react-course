import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './modules/home/components/Home';
import About from './modules/about/components/About';
import NotFound from './modules/common/components/NotFound';
import Navigation from './modules/common/components/Navigation';
import TodosModule from './modules/todos/TodosModule';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='todos/*' element={<TodosModule />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
