import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../../Pages/Home";
import PokemonInfo from "../../../Pages/PokemonInfo";
import Page404 from "../../../Pages/Page404";
import {
  Body,
  TopArea,
  RoundedButtonSpanStyled,
  Display,
  BottomArea,
  LargeButtonStyled,
  Hamburger,
  HamburgerBar,
} from "./styles.js";

const PokedexDisplay = () => {
  return (
    <Body>
      <TopArea>
        <RoundedButtonSpanStyled />
        <RoundedButtonSpanStyled />
      </TopArea>
      <></>
      <Display>
        <Switch>
          <Route exact path="/">
            <Home />
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
