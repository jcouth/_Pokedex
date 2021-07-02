import React, { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import changePokemon from "../../../Contexts/ChangePokemon";
import { RoundedButtonSpan, GridArea, Button } from "../../UI";
import { black, yellow, white } from "../../UI/variaveis";
import { SearchArea, StyledInput, RoundButtonArea } from "./styles";

const PokedexSearch = () => {
  const [pokemonInput, setPokemonInput] = useState("");
  const change = useContext(changePokemon);
  const history = useHistory();
  // teste
  let searchInput = useRef();

  const handleKeyUpSearch = (e) => {
    if (e.keyCode === 13) {
      handleClickSearch();
    }
  };

  const handleChangeSearch = (e) => {
    setPokemonInput(e.target.value.toLowerCase());
  };

  const handleClickSearch = () => {
    if (pokemonInput === "") {
      searchInput.focus();
    } else {
      setPokemonInput("");
      history.push(`/pokemon/${pokemonInput}`);
    }
  };

  const handleClickBack = () => {
    setPokemonInput("");
    history.push(`/`);
  };

  const handleClickPrev = () => {
    if (!change.prevPokemon.url) {
      if (0 < change.prevPokemon.pokemon) {
        setPokemonInput("");
        history.push(`/pokemon/${change.prevPokemon.pokemon}`);
      }
    } else if (change.prevPokemon.pokemon) {
      change.setPrev(!change.prev);
    }
  };

  const handleClickNext = () => {
    if (!change.nextPokemon.url) {
      setPokemonInput("");
      history.push(`/pokemon/${change.nextPokemon.pokemon}`);
    } else {
      change.setNext(!change.next);
    }
  };

  return (
    <SearchArea>
      <StyledInput
        ref={(input) => {
          searchInput = input;
        }}
        type="text"
        value={pokemonInput}
        onChange={handleChangeSearch}
        onKeyUp={handleKeyUpSearch}
      />
      <GridArea
        rows={"repeat(2, 1fr)"}
        columns={"repeat(4, 1fr)"}
        gap={"0.05rem 0.1rem"}
      >
        <Button pointer onClick={handleClickSearch}>
          Pesquisar
        </Button>
        <Button pointer onClick={handleClickBack}>
          Voltar
        </Button>
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </GridArea>
      <GridArea rows={"1"} columns={"repeat(2, 1fr)"}>
        <GridArea rows={"1"} columns={"repeat(2, 1fr)"}>
          <Button background={white} pointer onClick={handleClickPrev}>
            Anterior
          </Button>
          <Button background={white} pointer onClick={handleClickNext}>
            Próxima
          </Button>
        </GridArea>
        <RoundButtonArea>
          <RoundedButtonSpan
            width={"2.5rem"}
            height={"2.5rem"}
            background={yellow}
          />
        </RoundButtonArea>
      </GridArea>
      <GridArea rows={"1"} columns={"repeat(2, 1fr)"}>
        <Button background={black}></Button>
        <Button background={black}></Button>
      </GridArea>
    </SearchArea>
  );
};

export default PokedexSearch;
