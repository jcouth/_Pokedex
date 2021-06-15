import React, { useState } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import PokemonInfo from "../../Pages/PokemonInfo";
import Page404 from "../../Pages/Page404";
import { MiniButton } from "../UI";
import {
  primary,
  tertiary,
  black,
  light_black,
  defaultBorderRadius,
} from "../UI/variaveis";

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TopArea = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const MiniButtonStyled = styled(MiniButton)`
  margin: 0 0.5rem;
`;

const Display = styled.div`
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

const BottomArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const LargeButtonStyled = styled(MiniButton)`
  width: 1.5rem;
  height: 1.5rem;
`;

const Hamburger = styled.span`
  height: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const HamburgerBar = styled.span`
  width: 1.5rem;
  height: 0.3rem;
  border-radius: ${defaultBorderRadius};
  background: ${black};
`;

const PokedexDisplay = ({ prev, setPrev, next, setNext }) => {
  const [page, setPage] = useState(0);
  const [loadFinished, setLoadFinished] = useState(false);

  const handleScroll = (event) => {
    // const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    // if (scrollHeight - scrollTop <= clientHeight) {
    //   if (!loadFinished) {
    //     setPage((page) => page + 1);
    //     setLoadFinished(true);
    //     console.log("oi1");
    //   }
    // }
  };

  return (
    <Body>
      <TopArea>
        <MiniButtonStyled />
        <MiniButtonStyled />
      </TopArea>
      <></>
      <Display onScroll={handleScroll.bind(this)}>
        <Switch>
          <Route exact path="/">
            <Home
              page={page}
              setLoadFinished={setLoadFinished.bind(this)}
              prev={prev}
              setPrev={setPrev.bind(this)}
              next={next}
              setNext={setNext.bind(this)}
            />
          </Route>
          <Route exact path="/pokemon/:name">
            <PokemonInfo />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </Display>
      <></>
      <BottomArea>
        <LargeButtonStyled />
        <Hamburger>
          <HamburgerBar />
          <HamburgerBar />
          <HamburgerBar />
        </Hamburger>
      </BottomArea>
    </Body>
  );
};

export default PokedexDisplay;
