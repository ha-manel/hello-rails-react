import React, { useEffect } from 'react';

const Greeting = () => {
  async function getMessage() {
    await fetch('api/messages')
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }
  useEffect(() => {
    getMessage()
  }, [])
  
  return <div>Greeting</div>;
};

export default Greeting;
