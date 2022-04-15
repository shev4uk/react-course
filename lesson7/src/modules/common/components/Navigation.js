import { NavLink } from 'react-router-dom';
import useLanguage from '../hooks/useLanguage'

export default function Navigation() {
  const {language, toggleLang} = useLanguage();
  return (
    <>
      <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about" className="btn">About</NavLink>
          <NavLink to="/todos">Todos</NavLink>
      </nav>
      <button onClick={toggleLang}>{language === 'en' ? 'Change language' : 'Змінити мову'}</button>
    </>

  )
}
