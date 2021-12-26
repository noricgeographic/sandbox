/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled"

export const Emotion = () => {

  // scssの書き方がそのまま可能な書き方
  const containerStyle = css`
    border: solid 1px #aaa;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
  `;

  // インラインスタイルの書き方
  const titleStyle = css({
    margin: 0,
    color: "red"
  });

  // styled-componentsの書き方
  const SButton = styled.button`
    background-color: black;
  `

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>Emotionです</p>
      <SButton>ボタン</SButton>
    </div>
  )
 }
