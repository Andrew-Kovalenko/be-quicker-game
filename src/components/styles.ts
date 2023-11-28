import styled from "styled-components";

export const GameContainer = styled.div`
  background-color: blanchedalmond;
  display: flex;
  width: 100%;
  max-width: 450px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
  padding: 0 10px;
  box-sizing: border-box;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
  padding-bottom: 10px;
`
export const Title = styled.h2`
  margin: 0;
  font-size: 26px;
  text-align: center;
`

export const Subtitle = styled.div`
  font-size: 12px;
  text-align: center;
  margin-bottom: 10px;
`

export const DescriptionSubTitle = styled.div`
  font-size: 12px;
  text-decoration: underline;
  justify-content: start;
`

export const Description = styled.div`
  padding: 5px 0;
  line-height: 22px;
  
  span {
    text-decoration: underline;
  }
`

export const Button = styled.button`
  border: 1px solid darkgray;
  background: lightgoldenrodyellow;
  border-radius: 5px;
  width: 120px;
  height: 25px;
  cursor: pointer;
`