import React, { useState } from 'react'

function AdsetAction() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSend = async () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);

    const resp = await fetch(`http://0.0.0.0/adset`);
    const result = await resp.json();

    setIsLoading(false)
    setData(result); 

  }

  return (
    <div>
      {isLoading && (<div>Loading...</div>)}
      <button onClick={onSend}>Adset</button>

      {(data && !isLoading) && (
        <span>{JSON.stringify(data)}</span>
      )}
    </div>
  )
}

export default AdsetAction