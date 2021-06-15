import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import PokedexArea from "../PokedexArea";
import PokedexDisplay from "../PokedexDisplay";
import PokedexSearch from "../PokedexSearch";

const StyledBody = styled.main`
  display: flex;
  justify-content: center;
`;

const PokedexBody = () => {
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  const changePrev = () => {
    if (window.location.pathname === "/")
      setPrev(true);
  };

  const changeNext = () => {
    if (window.location.pathname === "/")
      setNext(true);
  };

  return (
    <BrowserRouter>
      <StyledBody>
        <PokedexArea flexGrow={1}>
          <PokedexDisplay
            prev={prev}
            setPrev={setPrev.bind(this)}
            next={next}
            setNext={setNext.bind(this)}
          />
        </PokedexArea>
        <PokedexArea right>
          <PokedexSearch
            prev={changePrev.bind(this)}
            next={changeNext.bind(this)}
          />
        </PokedexArea>
      </StyledBody>
    </BrowserRouter>
  );
};

export default PokedexBody;
