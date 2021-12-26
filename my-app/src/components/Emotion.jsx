/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

export const Emotion = () => {

  const containerStyle = css`
    border: solid 1px #aaa;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
  `;

  return (
    <div css={containerStyle}>
      <p>Emotionです</p>
      <button>ボタン</button>
    </div>
  )
 }
