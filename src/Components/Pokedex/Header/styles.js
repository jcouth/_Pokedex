import styled from "styled-components";
import { RoundedButtonSpan } from "../../UI";
import {
  primary,
  defaultBorderColor,
  defaultBorderSize,
  defaultBorderRadius,
  blue,
  white,
  dark_blue,
} from "../../UI/variaveis";

export const Header = styled.header`
  display: flex;
  align-items: flex-end;
`;

export const HeaderArea = styled.section`
  flex-grow: 1;
  display: flex;
  width: ${(props) => (props.width ? props.width : "")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "")};
  padding: 1rem;
  border: ${defaultBorderSize} solid ${defaultBorderColor};
  border-top-color: ${(props) =>
    props.borderTopColor ? props.borderTopColor : ""};
  border-right-color: ${(props) =>
    props.borderRightColor ? props.borderRightColor : ""};
  border-bottom-color: ${(props) =>
    props.borderBottomColor ? props.borderBottomColor : ""};
  border-left-color: ${(props) =>
    props.borderLeftColor ? props.borderLeftColor : ""};
  border-radius: ${defaultBorderRadius};
  border-top-left-radius: ${(props) =>
    props.topLeftRadius ? props.topLeftRadius : ""};
  border-top-right-radius: ${(props) =>
    props.topRightRadius ? props.topRightRadius : ""};
  border-bottom-left-radius: ${(props) =>
    props.bottomLeftRadius ? props.bottomLeftRadius : ""};
  border-bottom-right-radius: ${(props) =>
    props.bottomRightRadius ? props.bottomRightRadius : ""};
  background: ${(props) => (props.background ? props.background : primary)};
  position: relative;
`;

export const HeaderAreaHelper = styled.span`
  width: ${(props) => (props.width ? `calc(${props.width}/2 - 2rem)` : "10vw")};
  height: calc(3rem + ${defaultBorderSize});
  position: absolute;
  top: ${(props) => (props.top ? props.top : "")};
  right: ${(props) => (props.right ? props.right : "")};
  bottom: ${(props) => (props.bottom ? props.bottom : "")};
  left: ${(props) => (props.left ? props.left : "")};
  background: ${defaultBorderColor};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: ${(props) => (props.pseudoLeft ? props.pseudoLeft : "")};
    right: ${(props) => (props.pseudoRight ? props.pseudoRight : "")};
    border-left: ${(props) =>
      props.pseudoLeftBorder
        ? `${props.pseudoLeftBorder} solid transparent`
        : ""};
    border-right: ${(props) =>
      props.pseudoRightBorder
        ? `${props.pseudoRightBorder} solid transparent`
        : ""};
    border-bottom: calc(3rem + ${defaultBorderSize}) solid ${defaultBorderColor};
  }

  &::after {
    content: "";
    position: absolute;
    top: ${defaultBorderSize};
    left: ${(props) =>
      props.pseudoLeft
        ? `calc(${props.pseudoLeft} + ${defaultBorderSize})`
        : ""};
    right: ${(props) =>
      props.pseudoRight
        ? `calc(${props.pseudoRight} + ${defaultBorderSize})`
        : ""};
    width: calc(100% - ${defaultBorderSize});
    border-left: ${(props) =>
      props.pseudoLeftBorder
        ? `${props.pseudoLeftBorder} solid transparent`
        : ""};
    border-right: ${(props) =>
      props.pseudoRightBorder
        ? `${props.pseudoRightBorder} solid transparent`
        : ""};
    border-bottom: calc(3rem + ${defaultBorderSize}) solid ${primary};
  }
`;

export const RoundButtonOutside = styled(RoundedButtonSpan)`
  width: 4rem;
  height: 4rem;
  background: ${white};
  position: relative;
`;

export const RoundButtonInside = styled(RoundedButtonSpan)`
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: calc(0.5rem - ${defaultBorderSize});
  left: calc(0.5rem - ${defaultBorderSize});
  background: ${blue};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    background: ${dark_blue};
  }

  &::after {
    content: "";
    position: absolute;
    top: ${defaultBorderSize};
    left: ${defaultBorderSize};
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: ${blue};
  }
`;

export const Shine = styled(RoundedButtonSpan)`
  z-index: 1;
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  top: calc(0.4rem + ${defaultBorderSize});
  left: calc(0.4rem + ${defaultBorderSize});
  border: none;
  background: ${white};
`;

export const GroupArea = styled.div`
  display: flex;
`;

export const RoundedButtonSpanStyled = styled(RoundedButtonSpan).attrs({
  width: "1rem",
  height: "1rem",
})`
  margin-left: 0.5rem;
`;
