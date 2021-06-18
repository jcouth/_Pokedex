import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  primary,
  secondary,
  tertiary,
  black,
  blue,
  white,
  defaultBorderColor,
  defaultBorderSize,
  defaultBorderRadius,
} from "./variaveis";

export const GridArea = styled.div`
  ${(props) => (props.flexGrow ? props.flexGrow : 0)};
  display: grid;
  grid-template-columns: ${(props) => (props.columns ? props.columns : 4)};
  grid-template-rows: ${(props) => (props.rows ? props.rows : 2)};
  gap: ${(props) => (props.gap ? props.gap : "0.5rem")};
  text-align: ${(props) => (props.align ? props.align : "inherit")};
`;

export const RoundedButtonSpan = styled.span`
  display: block;
  width: ${(props) => (props.width ? props.width : "0.75rem")};
  height: ${(props) => (props.height ? props.height : "0.75rem")};
  border: ${defaultBorderSize} solid ${black};
  border-radius: 50%;
  background: ${(props) => (props.background ? props.background : primary)};
`;

export const Button = styled.button`
  width: ${(props) => (props.width ? props.width : "initial")};
  height: ${(props) => (props.height ? props.height : "3rem")};
  border: ${defaultBorderSize} solid ${black};
  border-radius: ${defaultBorderRadius};
  background: ${(props) => (props.background ? props.background : blue)};
  position: relative;

  &:hover {
    cursor: ${(props) => (props.pointer ? "pointer" : "")};
  }
`;

export const Image = styled.img`
  width: 96px;
  height: 96px;
  margin: 0 auto;
`;

export const PokeId = styled.div`
  flex-grow: ${(props) => (props.flexGrow ? props.flexGrow : "0")};
  display: flex;
  align-items: center;
  font-size: ${(props) => (props.size ? props.size : "1em")};
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : "inherit")};
`;

export const PokeName = styled.p`
  flex-grow: ${(props) => (props.flexGrow ? props.flexGrow : "0")};
  display: flex;
  align-items: center;
  font-size: ${(props) => (props.size ? props.size : "1em")};
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : "inherit")};
`;

export const PokeTypes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Type = styled.p`
  font-size: 0.75em;
  padding: 0.1rem 0.85rem;
  margin-top: 0.25rem;
  margin-right: 0.25rem;
  border-radius: ${defaultBorderRadius};
  background: ${(props) => (props.background ? props.background : white)};
  color: ${(props) => (props.color ? props.color : black)};

  &:last-child {
    margin-right: 0;
  }
`;

export const PokeTopArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin: 1rem 0;
`;

export const Diviser = styled.div`
  width: 2.5rem;
  margin-left: -${defaultBorderSize};
  border: ${defaultBorderSize} solid ${defaultBorderColor};
  border-radius: ${defaultBorderRadius};
  background: ${primary};
  position: relative;

  &::before {
    content: "";
    width: 0.5rem;
    height: 100%;
    position: absolute;
    top: -${defaultBorderSize};
    left: -${defaultBorderSize};
    border: ${defaultBorderSize} solid ${defaultBorderColor};
    border-right: none;
    border-top-left-radius: ${defaultBorderRadius};
    border-bottom-left-radius: ${defaultBorderRadius};
    background: ${tertiary};
  }

  &::after {
    content: "";
    width: 0.5rem;
    height: 100%;
    position: absolute;
    top: -${defaultBorderSize};
    right: -${defaultBorderSize};
    border: ${defaultBorderSize} solid ${defaultBorderColor};
    border-left: none;
    border-top-right-radius: ${defaultBorderRadius};
    border-bottom-right-radius: ${defaultBorderRadius};
    background: ${secondary};
  }
`;

export const LinkStyled = styled(Link)`
  width: 100%;
`;
