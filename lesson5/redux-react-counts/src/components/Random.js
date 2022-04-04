import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../store/actions/items'

export default function Random() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  function onChangeHandler(e) {
    setValue(e.target.value)
  }
  function onAddItem() {
    dispatch(add({name: value, random: Math.random()}))
  }
  return (
    <div>
        <input type="text" value={value} onChange={onChangeHandler} />
        <button onClick={onAddItem}>Add</button>
    </div>
  )
}
