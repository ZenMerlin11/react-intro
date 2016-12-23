import * as React from 'react';

export interface SquareProps {
  value: number;
  onClick: any;
}

export interface SquareState {
  value: any;
}

export function Square(props: SquareProps) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}
