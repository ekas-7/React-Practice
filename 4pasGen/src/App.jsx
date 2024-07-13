import React, { useState } from 'react';

function App() {
  const [len, setLen] = useState(8); // State for password length
  const [num, setNum] = useState(false); // State for including numbers
  const [spec, setSpec] = useState(false); // State for including special characters
  const [pass, setPass] = useState(""); // State for generated password

  // Function to generate a random password
  const generatePassword = () => {
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (num) charset += '0123456789';
    if (spec) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let generatedPassword = '';
    for (let i = 0; i < len; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPass(generatedPassword);
  };

  return (
    <>
      <div className='w-screen h-screen bg-gray-800 flex flex-col items-center'>
        <h1 className='text-4xl text-white mt-10'>Password Generator</h1>
        
        
      </div>
    </>
  );
}

export default App;
