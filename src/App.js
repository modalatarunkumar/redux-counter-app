import React, { useState } from "react";
import { increment, decrement, incrementByValue } from "./feature/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";


function App() {
  const [input, setInput] = useState('');
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div
    className='bg-zinc-900 text-zinc-100 flex justify-center items-center flex-col min-h-screen gap-6'
    >
      <h1 className="text-lg">Counter App using Redux Toolkit</h1>
      <div
      className="space-x-3"
      >
        <input 
        type="number"
        className='w-4/5 md:w-auto bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' placeholder='Enter a number...' 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button
        className="w-4/5 md:w-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        onClick={() => dispatch(incrementByValue(+input))}
         >
          Increment By Value
        </button>
      </div>
      <div className="space-x-6">
        <button 
        onClick={() => dispatch(increment())}
        className="w-32 md:w-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Increment By 1
        </button>
        <span>{count}</span>
        <button 
        onClick={() => dispatch(decrement())}
        className="w-32 md:w-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Decrement By 1
        </button>
      </div>
    </div>
  );
}

export default App;
