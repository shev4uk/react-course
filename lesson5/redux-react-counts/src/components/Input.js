import { useDispatch, useSelector } from "react-redux";
import { set } from '../store/actions/counter';

export default function Input() {
  const counts = useSelector(state => state.counts);
  const dispatch = useDispatch();
  function onChangeHandler(e) {
    dispatch(set(+e.target.value));
  }
  return (
    <div>
        <input type="text" value={counts} onChange={onChangeHandler} />
    </div>
  )
}
