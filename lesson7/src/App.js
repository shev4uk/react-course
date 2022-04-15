import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './modules/home/components/Home';
import About from './modules/about/components/About';
import NotFound from './modules/common/components/NotFound';
import Navigation from './modules/common/components/Navigation';
import TodosModule from './modules/todos/TodosModule';
import './App.css';
import LanguageProvider from './modules/common/providers/languageContext';


function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='todos/*' element={<TodosModule />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
