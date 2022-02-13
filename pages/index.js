import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {decrement, increment} from "../store/counterSlice";

const IndexPage = () => {

  const dispatch = useDispatch();
  const {
    count
  } = useSelector(state => state.counter);

  const getIncrement = () => {
    dispatch(increment())
  }

  const getDecrement = () => {
    dispatch(decrement())
  }

  useEffect(()=> {

  })

  return(
    <div>
      <h1>Quick Next.js Pack With Redux Toolkit</h1>
      <h2>Counted: {count}</h2>
      <hr/>
      <button onClick={() => getIncrement()}>Increment</button>
      &nbsp; 
      <button onClick={() => getDecrement()}>decrement</button>
    </div>
  )
}

export default IndexPage;
