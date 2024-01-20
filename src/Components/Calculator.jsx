import React, { useState, useRef } from 'react';

function Calculator(props) {
    const myref = useRef(null)
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (myref.current) {
        myref.current.focus();
      }
    setResult(result + value);
  };

  const handleSum = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Plaese Enter Correct functionality");
    }
  };

  const handleClear = () => {
    setResult("");
  };

  return (
    <div>
      <h1 className='text-2xl bg-green-500 mx-auto text-center mt-10'>
       Project{props.number}  Calculator
      </h1>
      <div className='mx-auto text-center my-10'>
        <div className="flex justify-center items-center">
          <input
            type="text"
            id="result"
            value={result}
            className="bg-gray-50 border w-[300px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your result will show here"
            required=""
          />
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleSum}
          >
            Sum
          </button>
        </div>
        <div className='flex justify-center items-center mt-6' ref={myref}>
          {[1, 2, 3, '+'].map((value, index) => (
            <p
              key={index}
              className='text-2xl mx-1 w-16 h-10 text-white cursor-pointer bg-red-600'
              onClick={() => handleButtonClick(value)}
            >
              {value}
            </p>
          ))}
        </div>
        <div className='flex justify-center items-center mt-6'>
          {[4, 5, 6, '-'].map((value, index) => (
            <p
              key={index}
              className='text-2xl mx-1 w-16 h-10 text-white cursor-pointer bg-red-600'
              onClick={() => handleButtonClick(value)}
            >
              {value}
            </p>
          ))}
        </div>
        <div className='flex justify-center items-center mt-6'>
          {[7, 8, 9, '*'].map((value, index) => (
            <p
              key={index}
              className='text-2xl mx-1 w-16 h-10 text-white cursor-pointer bg-red-600'
              onClick={() => handleButtonClick(value)}
            >
              {value}
            </p>
          ))}
        </div>
        <div className='flex justify-center items-center mt-6'>
          {['%', 0, '.', 'Clear'].map((value, index) => (
            <p
              key={index}
              className='text-2xl mx-1 w-16 h-10 text-white cursor-pointer bg-red-600'
              onClick={() => {
                value === 'Clear' ? handleClear() : handleButtonClick(value);
              }}
            >
              {value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
