import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about" className="btn">About</NavLink>
        <NavLink to="/todos">Todos</NavLink>
    </nav>
  )
}
