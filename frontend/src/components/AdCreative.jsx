import React, { useState } from 'react'

function AdCreativeAction() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSend = async () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);

    const resp = await fetch(`http://0.0.0.0/creative_ads`);
    const result = await resp.json();

    setIsLoading(false)
    setData(result); 

  }

  return (
    <div>
      {isLoading && (<div>Loading...</div>)}
      <button onClick={onSend}>AdCreative</button>

      {(data && !isLoading) && (
        <span>{JSON.stringify(data)}</span>
      )}
    </div>
  )
}

export default AdCreativeAction