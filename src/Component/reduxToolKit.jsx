import { useSelector, useDispatch } from "react-redux";
import { actions } from "../Store/reduxToolKit";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const Increment = () => {
    dispatch(actions.increment());
  };

  const Decrement = () => {
    dispatch(actions.decrement());
  };

  const AddValue = () => {
    dispatch(actions.addBy(10));
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={AddValue}>Add Value</button>
    </>
  );
}
export default App;