import React, { useState } from 'react'

function CampaignAction() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSend = async () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);

    const resp = await fetch(`http://localhost:8000/campaign/`);
    const result = await resp.json();

    setIsLoading(false)
    setData(result); 

  }

  return (
    <div>
      {isLoading && (<div>Loading...</div>)}
      <button onClick={onSend}>Campaign</button>

      {(data && !isLoading) && (
        <span>{JSON.stringify(data)}</span>
      )}
    </div>
  )
}

export default CampaignAction