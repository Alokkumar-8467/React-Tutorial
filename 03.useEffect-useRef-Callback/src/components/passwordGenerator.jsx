import useLocalStorage from "./useLocalStorage"
import "./theme.css"


import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useRef } from 'react';
import { useCallback } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PasswordGenerator = () => {

    const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed ] = useState(false);
  const [charAllowed, setCharAllowed ] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

// 1. here we use usecallback

  const passwordGenerator = useCallback(() => {
    let pass = "";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "1234567890"
    if(charAllowed) str += "~`!@#$%^&*()_+{}\';:<>?/"

    for (let i = 1; i <=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

      setPassword(pass);

    }
  } ,[length,numberAllowed, charAllowed, setPassword]);


// 2. here we use useEffect

  useEffect(()=> {
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator ])

// 3. here we use useRef value within useCallback

  const copyPasswordToClipboard = useCallback(()=> {
    try {
      toast.success("Password Copy Successfully",{
        position: 'top-center'
      });
    } catch (error) {
      toast.success("Error in copy",{
        position: 'top-center'
      });
    }
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password, setPassword])


  const [theme , setTheme] = useLocalStorage("theme", "dark")

  function handleToggleTheme(){
    setTheme(theme === "light" ? "dark"  : "light" )
    toast.success("Theme Changed")
  }
  console.log(theme)


  return (
    
    <>

<div className='light-dark-mode flex justify-start px-96'  data-theme={theme} >
    <div >
      <button className="bg-slate-200 gap-3 shadow-lg px-5 py-2 rounded-3xl mt-10 " onClick={handleToggleTheme} >Change Theme</button>
      <ToastContainer />
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8  text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button 
      
        onClick={copyPasswordToClipboard}
        className='ontline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-500'>
          Copy
        </button>
        <ToastContainer />
        

      </div>
      <div className='felx text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" 
          min={8}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length:{length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev) => !prev);
          }}
          />
          <label htmlFor="nuberInput">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id='charInput'
          onChange={()=>{
            setCharAllowed((prev) => !prev);
          }}
          />
          <label htmlFor="charInput">Character</label>
        </div>
        
      </div>
    </div>
  </div>
</div>
  
  </>

  )
}

export default PasswordGenerator