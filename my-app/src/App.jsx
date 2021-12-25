import {ColoredMessage} from "./components/ColoredMessage";

export const App = () => {

  const onClickButton = () => {
    alert();
  }

  const contentStyle = {
    color: "blue",
    fontSize: "20px",
  }

  return (
    <>
      <h1 style={{color:"red"}}>こんにちは！</h1>
      <ColoredMessage color="blue" message="お元気ですか？" />
      <ColoredMessage color="pink" message="元気です！" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
}
