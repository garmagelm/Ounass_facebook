import React, { useState } from 'react'

function UserAction() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [name] = useState('Elmira Zaripova');

  const onSend = async () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);

    const resp = await fetch(`/hello/${name}`);
    const result = await resp.json();

    setIsLoading(false)
    setData(result); 

  }

  return (
    <div>
      {isLoading && (<div>Loading...</div>)}
      <button onClick={onSend}>Send Action</button>

      {(data && !isLoading) && (
        <span>{JSON.stringify(data)}</span>
      )}
    </div>
  )
}

export default UserAction