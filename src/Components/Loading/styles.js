import styled from "styled-components";
import { black, defaultBorderSize, primary, white } from "../UI/variaveis";

export const LoadingStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 1.5em;
  margin: 1rem 0;
  color: ${white};
`;

export const Pokebola = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: ${defaultBorderSize} solid ${black};
  background: ${primary};
  position: relative;

  &::before {
    content: "";
    width: calc(3rem - ${defaultBorderSize}*2);
    height: calc(1.5rem - ${defaultBorderSize}*1.5);
    position: absolute;
    bottom: -${defaultBorderSize};
    left: -${defaultBorderSize};
    border-bottom-left-radius: calc(1.5rem + ${defaultBorderSize});
    border-bottom-right-radius: calc(1.5rem + ${defaultBorderSize});
    border: ${defaultBorderSize} solid ${black};
    background: ${white};
  }

  &::after {
    content: "";
    width: calc(1rem - ${defaultBorderSize}*2);
    height: calc(1rem - ${defaultBorderSize}*2);
    border-radius: 50%;
    border: ${defaultBorderSize} solid ${black};
    background: ${white};
    z-index: 1;
  }

  -webkit-animation: spin 3s linear infinite;
  -moz-animation: spin 3s linear infinite;
  animation: spin 3s linear infinite;

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
