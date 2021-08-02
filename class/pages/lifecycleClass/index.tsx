import Router from "next/router";
import { Component, createRef } from "react";

interface IPrev {
  count: number;
}

export default class LifecycleClassPage extends Component {
  state = {
    count: 0,
  };

  inputRef = createRef<HTMLInputElement>();

  componentDidMount() {
    this.inputRef.current?.focus();
    console.log("안녕!");
  }

  componentDidUpdate() {
    console.log("반가워!");
  }

  componentWillUnmount() {
    alert("잘가!");
  }

  onClickCount = () => {
    this.setState((prev: IPrev) => ({
      count: prev.count + 1,
    }));
  };

  onClickMove = () => {
    Router.push("/");
  };

  render() {
    return (
      <>
        <input type="password" ref={this.inputRef} />
        <div>카운트: {this.state.count}</div>
        <button onClick={this.onClickCount}>더하기 1</button>
        <div>이것은 클래스 컴포넌트입니다.</div>
        <button onClick={this.onClickMove}>나가기</button>
      </>
    );
  }
}

// onClickCount = () => {
//   this.setState((prev: { count: number }) => ({
//     count: prev.count + 1,
//   }));
// };
