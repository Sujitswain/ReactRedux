import { useSelector, useDispatch } from "react-redux"

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const Increment = () => {
    dispatch({
      type: 'INC',
    });
  }

  const Decrement = () => {
    dispatch({
      type: "DEC",
    });
  };

  const AddValue = () => {
    dispatch({
      type: "ADD",
      payload: 10
    })
  }

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
export default App