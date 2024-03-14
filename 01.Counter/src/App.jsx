
import { useState } from 'react';



function Counter() {

  const [counter1 , setCounter1] = useState(0);
  const [counter2 , setCounter2] = useState(0);
  const [counter3 , setCounter3] = useState(0);
  const [counter4 , setCounter4] = useState(0);




  // first counter
  const addValue1 = () => {
    if(counter1<=4){
      setCounter1(counter1 + 1)
    }else{
      setCounter1(5)
    }
  }

  const removeValue1 = () => {
    if(counter1>=1){
      setCounter1(counter1 - 1)
    }else{
      setCounter1(0)
    }
  }
  
  const resetValue1 = () => {
    setCounter1(0)
  }

  // second counter
  const addValue2 = () => {
    setCounter2(counter2 + 1)
  }

  const removeValue2 = () => {
    setCounter2(counter2 - 1)
  }

  const resetValue2 = () => {
    setCounter2(0)
  }

  // third counter
  const addValue3 = () => {
    if(counter3<=4){
      setCounter3(counter3 + 1)
    }else{
      setCounter3(0)
    }
  }

  const removeValue3 = () => {
    if(counter3>=1){
      setCounter3(counter3 - 1)
    }else{
      setCounter3(5)
    }
  }
  
  const resetValue3 = () => {
    setCounter3(0)
  }

  // fourth counter its a kind of basic react fundamental.
  const addValue4 = () => {
    setCounter4( counter4 => counter4 + 1)
    setCounter4( counter4 => counter4 + 1)
    setCounter4( counter4 => counter4 + 1)
    setCounter4( counter4 => counter4 + 1)
  }

  const removeValue4 = () => {
    setCounter4( counter4 => counter4 - 1)
    setCounter4( counter4 => counter4 - 1)
    setCounter4( counter4 => counter4 - 1)
    setCounter4( counter4 => counter4 - 1)
  }

  const resetValue4 = () => {
    setCounter4(0)
  }

  return (
    
      <div className="grid grid-cols-4 gap-4 h-screen" >
        <div className="grid grid-cols-12 justify-center shadow-xl">
            <div className='col-span-6 col-start-4 py-60'>
              <div className=' shadow-2xl'>
              <h1 className=' flex justify-center font-extrabold'>Counter 1</h1>
              <h2 className='font-bold flex justify-center mt-5'>Counter Value : {counter1} </h2>
              <div className='flex justify-center mt-5'>
              <button className='bg-green-400 hover:bg-green-600 py-4 mr-4 rounded-xl text-white px-2  mb-5' onClick={addValue1}>Inc</button>
              <button className='bg-slate-600 hover:bg-slate-500 py-4 rounded-xl text-white px-2 mr-4 mb-5'  onClick={resetValue1}>Reset</button>
              <button className='bg-red-600 hover:bg-red-500 py-4 rounded-xl text-white px-2 mb-5'  onClick={removeValue1}>Dec</button>
              </div>
              </div>
            </div>
          </div> 


          <div className="grid grid-cols-12 justify-center shadow-xl">
            <div className='col-span-6 col-start-4 py-60'>
              <div className=' shadow-2xl'>
              <h1 className=' flex justify-center font-extrabold'>Counter 2</h1>
              <h2 className='font-bold flex justify-center mt-5'>Counter Value : {counter2} </h2>
              <div className='flex justify-center mt-5'>
              <button className='bg-green-400 hover:bg-green-600 py-4 mr-4 rounded-xl text-white px-2  mb-5' onClick={addValue2}>Inc</button>
              <button className='bg-slate-600 hover:bg-slate-500 py-4 rounded-xl text-white px-2 mr-4 mb-5'  onClick={resetValue2}>Reset</button>
              <button className='bg-red-600 hover:bg-red-500 py-4 rounded-xl text-white px-2 mb-5'  onClick={removeValue2}>Dec</button>
              </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 justify-center shadow-xl">
            <div className='col-span-6 col-start-4 py-60'>
              <div className=' shadow-2xl'>
              <h1 className=' flex justify-center font-extrabold'>Counter 3</h1>
              <h2 className='font-bold flex justify-center mt-5'>Counter Value : {counter3} </h2>
              <div className='flex justify-center mt-5'>
              <button className='bg-green-400 hover:bg-green-600 py-4 mr-4 rounded-xl text-white px-2  mb-5' onClick={addValue3}>Inc</button>
              <button className='bg-slate-600 hover:bg-slate-500 py-4 rounded-xl text-white px-2 mr-4 mb-5'  onClick={resetValue3}>Reset</button>
              <button className='bg-red-600 hover:bg-red-500 py-4 rounded-xl text-white px-2 mb-5'  onClick={removeValue3}>Dec</button>
              </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 justify-center shadow-xl">
            <div className='col-span-6 col-start-4 py-60'>
              <div className=' shadow-2xl'>
              <h1 className=' flex justify-center font-extrabold'>Counter 4</h1>
              <h2 className='font-bold flex justify-center mt-5'>Counter Value : {counter4} </h2>
              <div className='flex justify-center mt-5'>
              <button className='bg-green-400 hover:bg-green-600 py-4 mr-4 rounded-xl text-white px-2  mb-5' onClick={addValue4}>Inc</button>
              <button className='bg-slate-600 hover:bg-slate-500 py-4 rounded-xl text-white px-2 mr-4 mb-5'  onClick={resetValue4}>Reset</button>
              <button className='bg-red-600 hover:bg-red-500 py-4 rounded-xl text-white px-2 mb-5'  onClick={removeValue4}>Dec</button>
              </div>
              </div>
            </div>
          </div>

  
  </div>
  )
}

export default Counter;

/*

<div className='fixed flex flex-wrap justify-end inset-x-0 px-2'>
        <div className='flex flex-wrap justify-end gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl mt-5'>
        <h1>Alok</h1>
        </div>
      </div>
*/