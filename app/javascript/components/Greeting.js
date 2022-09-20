import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetingMessage } from '../redux/greetingsReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.greeting.message);

  useEffect(() => {
    dispatch(getGreetingMessage());
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => dispatch(getGreetingMessage())}>Generate greeting message</button>
    </div>
  );
};

export default Greeting;
