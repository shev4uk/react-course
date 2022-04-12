import {Link, useLocation} from 'react-router-dom';
export default function TodoList({todos}) {
  const {pathname} = useLocation();
  return (
    <div>
        {
            todos.map((item) => {
                return <div key={item.id}>
                    <Link to={`${pathname}/${item.id}`}>{item.title}</Link>
                </div>
            })
        }
    </div>
  )
}
