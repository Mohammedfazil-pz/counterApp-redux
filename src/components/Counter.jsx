import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment, reset,incrementByAmount } from '../redux/counterSlice'


const Counter = () => {
  const dispatch=useDispatch()
  const [value,setValue]=useState("")
   const count=useSelector((state)=>state.counterReducer.count)
   const onButtonClick=()=>{
    if(value){
      console.log(value)
      dispatch(incrementByAmount(value))
    }else{
      alert("Please enter a amount to increase")
    }
   }
  return (
    <div>
      <h1  className='fw-bold text-center mt-3'>{count}</h1>
      <div className='d-flex justify-content-center gap-3' style={{marginTop:'30px'}}>
        <button className="btn btn-outline-success" onClick={()=>dispatch(increment())}>Increment</button>
        <button className="btn btn-outline-danger" onClick={()=>dispatch(decrement())}>Decrement</button>
        <button className="btn btn-outline-dark" onClick={()=>dispatch(reset())}>Reset</button>
      </div>
      <div className="container d-flex flex-column align-items-center gap-3" style={{marginTop:"50px"}}>
        <input onChange={(e)=>setValue(e.target.value)} type="text" className='form-control border border-warning' placeholder='Input amount to be Incremented' />
        <button onClick={onButtonClick} className='btn btn-warning w-100'>Increment</button>
      </div>
    </div>
  )
}

export default Counter
