import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MiniButton, GridArea, Button } from "../UI";
import {
  black,
  yellow,
  white,
  defaultBorderRadius,
} from "../UI/variaveis";

const SearchArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

const StyledInput = styled.input`
  font-size: 1.3em;
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: ${defaultBorderRadius};
  background: ${black};
  color: ${white};
`;

const FullWidthButton = styled(Button)`
  width: 100%;
  
  &:hover {
    cursor: ${(props) => props.actived ? "pointer" : ""};
  }
`;

const WhiteButton = styled(Button)`
  background: ${white};

  &:hover {
    cursor: pointer;
  }
`;

const BlackButton = styled(Button)`
  background: ${black};
`;

const RoundButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const RoundButton = styled(MiniButton)`
  display: block;
  width: 2.5rem;
  height: 2.5rem;
  background: ${yellow};
  position: relative;
`;

const PokedexSearch = ({ prev, next }) => {
  
  const handleClickPrev = () => {
    prev();
  }

  const handleClickNext = () => {
    next();
  }

  return (
    <SearchArea>
      <StyledInput type="text" disabled/>
      <GridArea
        rows={"repeat(2, 1fr)"}
        columns={"repeat(4, 1fr)"}
        gap={"0.05rem 0.1rem"}
      >
        <Link to="/">
          <FullWidthButton actived>Voltar</FullWidthButton>
        </Link>
        <FullWidthButton></FullWidthButton>
        <FullWidthButton></FullWidthButton>
        <FullWidthButton></FullWidthButton>
        <FullWidthButton></FullWidthButton>
        <FullWidthButton></FullWidthButton>
        <FullWidthButton></FullWidthButton>
        <FullWidthButton></FullWidthButton>
      </GridArea>
      <GridArea rows={"1"} columns={"repeat(2, 1fr)"}>
        <GridArea rows={"1"} columns={"repeat(2, 1fr)"}>
          <WhiteButton onClick={()=>{handleClickPrev()}}>Anterior</WhiteButton>
          <WhiteButton onClick={()=>{handleClickNext()}}>Próxima</WhiteButton>
        </GridArea>
        <RoundButtonArea>
          <RoundButton />
        </RoundButtonArea>
      </GridArea>
      <GridArea rows={"1"} columns={"repeat(2, 1fr)"}>
        <BlackButton></BlackButton>
        <BlackButton></BlackButton>
      </GridArea>
    </SearchArea>
  )
}

export default PokedexSearch;
