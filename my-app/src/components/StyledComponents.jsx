import styled from "styled-components";

export const StyledComponents = () => {
   return (
     <>
      <STitle>StyledComponents</STitle>
      <SButton>ボタン</SButton>
     </>
   )
 }

 const STitle = styled.p`
  color: blue;
 `

 const SButton = styled.button`
  background-color: green;
 `
