import { ColoredMessage } from "./components/ColoredMessage";
import { useState } from "react";
import { useEffect } from "react";

export const App = () => {
console.log("レンダリング");

  // stateの定義
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  }

  useEffect(() => {alert()}, [num]);

  const contentStyle = {
    color: "blue",
    fontSize: "20px",
  }

  return (
    <>
      <h1 style={{color:"red"}}>こんにちは！</h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
}
