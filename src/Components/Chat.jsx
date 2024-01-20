// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:5000'); // Replace with your server URL

// function Chat() {
//   const [name, setName] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     // Prompt for user's name
//     const userName = prompt('Enter your name');
//     setName(userName);

//     // Listen for messages from the server
//     socket.on('message', (newMessage) => {
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//     });

//     // Notify the server when the user joins
//     socket.emit('join', userName);

//     // Listen for user leaving
//     socket.on('userLeft', (leftUserName) => {
//       alert(`${leftUserName} left the chat`);
//     });

//     // Clean up when the component unmounts
//     return () => {
//       socket.emit('leave', userName);
//       socket.disconnect();
//     };
//   }, []);

//   const sendMessage = () => {
//     if (message.trim() !== '') {
//       socket.emit('message', { name, message });
//       setMessage('');
//     }
//   };

//   return (
//     <div>
//       <h1 className='text-3xl font-bold text-center my-6 bg-black text-white'>
//         Chat With Each Other
//       </h1>
//       <div className='max-w-sm mx-auto'>
//         <div className='chat h-96 bg-lime-400 w-[600px] mr-28'>
//           {messages.map((msg, index) => (
//             <div key={index} className={msg.name === name ? 'me' : 'user'}>
//               <h1 className={msg.name === name ? 'float-right' : 'float-left mt-10'}>
//                 {msg.message}
//               </h1>
//             </div>
//           ))}
//         </div>
//         <div className='flex'>
//           <input
//             type='text'
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className='bg-gray-50 border-indigo-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
//             placeholder='Type your message...'
//           />
//           <button
//             type='button'
//             onClick={sendMessage}
//             className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Chat;
import React from 'react'

function Chat() {
  return (
    <div>Chat</div>
  )
}

export default Chat