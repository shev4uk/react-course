import React, { useEffect, useState } from 'react'

export default function Counter() {
  const [counts, setCounts] = useState(0);
  useEffect(() => {
    console.log('init');
    return () => {
      console.log('unmount');
    }
  }, [])
  function onClickHandler() {
    setCounts(counts + 1)
  }
  return (
    <div>
        {counts}
        <button onClick={onClickHandler}>+</button>
    </div>
  )
}
