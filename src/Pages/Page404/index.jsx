import React from "react";
import { Link } from "react-router-dom";
import { Text, ButtonStyled } from './styles.js';

const Page404 = () => (
  <Link to="/">
    <Text>404 Página não encontrada</Text>
    <ButtonStyled pointer width={"7.5rem"}>
      Voltar
    </ButtonStyled>
  </Link>
);

export default Page404;
