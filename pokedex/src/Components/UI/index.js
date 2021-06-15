import styled from "styled-components";

import {
  primary,
  black,
  blue,
  white,
  defaultBorderSize,
  defaultBorderRadius,
} from "./variaveis";

export const MiniButton = styled.span`
  width: 0.75rem;
  height: 0.75rem;
  border: ${defaultBorderSize} solid ${black};
  border-radius: 50%;
  background: ${primary};
`;

export const GridArea = styled.div`
  display: grid;
  ${(props) => (props.flexGrow ? props.flexGrow : 0)};
  grid-template-columns: ${(props) => (props.columns ? props.columns : 4)};
  grid-template-rows: ${(props) => (props.rows ? props.rows : 2)};
  gap: ${(props) => (props.gap ? props.gap : "0.5rem")};
  text-align: ${(props) => (props.align ? props.align : "inherit")};
`;

export const Button = styled.button`
  height: 3rem;
  border: ${defaultBorderSize} solid ${black};
  border-radius: ${defaultBorderRadius};
  background: ${blue};
  position: relative;
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
