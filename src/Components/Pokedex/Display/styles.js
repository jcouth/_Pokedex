import styled from "styled-components";
import { RoundedButtonSpan } from "../../UI";
import {
  primary,
  tertiary,
  black,
  light_black,
  defaultBorderRadius,
} from "../../UI/variaveis";

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const TopArea = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const RoundedButtonSpanStyled = styled(RoundedButtonSpan)`
  margin: 0 0.5rem;
`;

export const Display = styled.div`
  padding: 0.5rem;
  width: 100%;
  height: 100%;
  border-radius: ${defaultBorderRadius};
  background: ${light_black};
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${tertiary};
    border-radius: ${defaultBorderRadius};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${primary};
  }
`;

export const BottomArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const LargeButtonStyled = styled(RoundedButtonSpan)`
  width: 1.5rem;
  height: 1.5rem;
`;

export const Hamburger = styled.span`
  height: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const HamburgerBar = styled.span`
  width: 1.5rem;
  height: 0.3rem;
  border-radius: ${defaultBorderRadius};
  background: ${black};
`;
