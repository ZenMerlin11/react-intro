import * as React from 'react';

export interface SquareProps {
  value: number
}

export interface SquareState {
  value: any
}

export class Square extends React.Component<SquareProps, SquareState> {
  constructor() {
    super();
    this.state = {
      value: null
    };
  }
  render() {
    return (
      <button className="square" onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  }
}
