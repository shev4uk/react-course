import { useDispatch } from "react-redux";
import { increment, decrement } from '../store/actions/counter'

export default function Buttons() {
  const dispatch = useDispatch();
  function onClickHandlerInc() {
    dispatch(increment());
  }
  function onClickHandlerDec() {
    dispatch(decrement());
  }
  return (
    <div>
      <button onClick={onClickHandlerInc}>+</button>
      <button onClick={onClickHandlerDec}>-</button>
    </div>
  );
}
