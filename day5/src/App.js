import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, incrementByAmount } from './features/counter/CounterSlice';

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="App">
    <div className=' flex space-x-3 justify-center items-center h-screen'>
      <div className="">

        {/* Read  */}
        <p className=' text-6xl font-bold text-center mb-5 text-white'>{count}</p>

        {/* Increment Button  */}
        <button
         onClick={()=>dispatch(increment())}
          className=' bg-red-600 text-white py-2.5 rounded-md px-5 font-bold'
        >
          Increment
        </button>

        {/* Decrement Button  */}
        <button
        onClick={()=>dispatch(decrement())}
          className=' ml-20 bg-green-600 text-white py-2.5 rounded-md px-5 font-bold'
        >
          Decrement
        </button>

        {/* Increment By User */}
        <button
        onClick={()=>dispatch(incrementByAmount(5))}
          className=' ml-20 bg-orange-600 text-white py-2.5 rounded-md px-5 font-bold'
        >
          Inc. By User
        </button>
      </div>
    </div>
    </div>
  );
}

export default App;
