import React, { useState } from 'react'

function InsightAPIAction() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSend = async () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);

    const resp = await fetch(`/insight/adset/{ad_set_id}`);
    const result = await resp.json();

    setIsLoading(false)
    setData(result); 

  }

  return (
    <div>
      {isLoading && (<div>Loading...</div>)}
      <button onClick={onSend}>Insight API</button>

      {(data && !isLoading) && (
        <span>{JSON.stringify(data)}</span>
      )}
    </div>
  )
}

export default InsightAPIAction