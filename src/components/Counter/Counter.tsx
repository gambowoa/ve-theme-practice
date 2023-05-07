import React, { useContext, useState } from 'react';

import { clsx } from 'clsx';
import { ThemeContext } from '../ThemeProvider';
import { counterStyle } from './Counter.css';
counterStyle;
export interface CounterProps {
  /** something */
  initialCount: number;
}
/**
 * jes=
 */
export const Counter = ({ initialCount }: CounterProps) => {
  const [count, setCount] = useState(initialCount);
  const theme = useContext(ThemeContext);
  return (
    <div className={clsx(theme, counterStyle)}>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
    </div>
  );
};
