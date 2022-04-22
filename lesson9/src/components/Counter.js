import React, { useEffect, useState } from 'react';
import './Counter.css';
import styles from './Button.module.css';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 24px;
  text-align: center;
`;

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
  function onClickHandlerMinus() {
    setCounts(counts - 1)
  }
  console.log(styles);
  return (
    <div>
        <Title>Counter</Title>
        {counts}
        <button onClick={onClickHandler} className="Counter__button">+</button>
        <button onClick={onClickHandlerMinus} className={styles.btn}>-</button>
    </div>
  )
}
