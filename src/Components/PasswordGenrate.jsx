import React, { useState } from 'react';

function PasswordGenrate(props) {
  const [generatedPassword, setGeneratedPassword] = useState('');
  // const [numberPassord, setnumberPassord] =  useState('');

  const generatePassword = (e) => {
    e.preventDefault();

    const generateRandomChar = (charset) => {
      const randomIndex = Math.floor(Math.random() * charset.length);
      return charset[randomIndex];
    };

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numericChars = '0123456789';
    const specialChars = '!@#$%^&*()-_+=<>?/{}[]';

    const getRandomChar = () => {
      const charsets = [uppercaseChars, lowercaseChars, numericChars, specialChars];
      const randomCharset = charsets[Math.floor(Math.random() * charsets.length)];
      return generateRandomChar(randomCharset);
    };

    const generateStrongPassword = () => {
      let password = '';

      for (let i = 0; i < 12; i++) {
        password += getRandomChar();
      }
      return password;
    };

    const newPassword = generateStrongPassword();
    setGeneratedPassword(newPassword);
  };

  return (
    <div>
      <h1 className='text-2xl bg-green-500 text-center mt-10'>Project{props.number}   Strong Password Generator</h1>
      <form className='mt-5 md:w-96 justify-center mx-auto'>
        <label
          htmlFor="Generate"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Generate
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="passwordGenerate"
            value={generatedPassword}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Generate your Strong Password"
            required=""
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={generatePassword}
          >
            Generate
          </button>
        </div>
      </form>
    </div>
  );
}

export default PasswordGenrate;
