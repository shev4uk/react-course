import { useSelector } from 'react-redux';
import Buttons from './components/Buttons'
import Input from './components/Input'
import Random from './components/Random'

function App() {
  const { counts } = useSelector(state => state.counts);
  const { items } = useSelector(state => state.items);
  console.log(counts, items);
  return (
    <div>
      {counts}
      <Buttons />
      <Input />
      <Random />
      <ul>
        {
          items.map((item) => {
            return <li key={item.random}>{item.name} - {item.random}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
