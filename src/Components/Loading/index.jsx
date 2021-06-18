import React from "react";
import { LoadingStyled, Title, Pokebola } from "./styles.js";

const Loading = () => (
  <LoadingStyled>
    <Title>Carregando...</Title>
    <Pokebola />
  </LoadingStyled>
);

export default Loading;
