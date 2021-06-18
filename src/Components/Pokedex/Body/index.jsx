import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import PokedexHeader from "../Header";
import PokedexArea from "../Area";
import PokedexDisplay from "../Display";
import PokedexSearch from "../Search";
import PokedexDiviser from "../Diviser";
import ChangePokemon from "../../../Contexts/ChangePokemon";
import { FlexArea } from "./styles.js";

const PokedexBody = () => {
  const [prevPokemon, setPrevPokemon] = useState({});
  const [nextPokemon, setNextPokemon] = useState({});
  const [prev, setPrev] = useState(true);
  const [next, setNext] = useState(true);
  const leftWidth = 50;
  const rightWidth = 25;

  return (
    <BrowserRouter>
      <FlexArea direction={"column"} align={"center"}>
        <PokedexHeader
          leftWidth={`${leftWidth}vw`}
          rightWidth={`${rightWidth}vw`}
        />
        <FlexArea justify={"center"}>
          <ChangePokemon.Provider
            value={{
              // funcao: funcao,
              prev: prev,
              setPrev: setPrev,
              next: next,
              setNext: setNext,
              prevPokemon: prevPokemon,
              setPrevPokemon: setPrevPokemon,
              nextPokemon: nextPokemon,
              setNextPokemon: setNextPokemon,
            }}
          >
            <PokedexArea flexGrow={1} width={`${leftWidth}vw`}>
              <PokedexDisplay />
            </PokedexArea>
            <PokedexDiviser
              borderTopColor={"transparent"}
              topLeftRadius={"0"}
              topRightRadius={"0"}
              bottomLeftRadius={"0"}
              bottomRightRadius={"0"}
              pseudoTopLeftRadius={"0"}
              pseudoTopRightRadius={"0"}
            />
            <PokedexArea right flexGrow={1} width={`${rightWidth}vw`}>
              <PokedexSearch />
            </PokedexArea>
          </ChangePokemon.Provider>
        </FlexArea>
      </FlexArea>
    </BrowserRouter>
  );
};

export default PokedexBody;
