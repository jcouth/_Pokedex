import React from "react";
import styled from "styled-components";
import { white } from "../Components/UI/variaveis";
import { Link } from "react-router-dom";
import { Button } from "../Components/UI";

const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  font-size: 2em;
  color: ${white};
`;

const ButtonStyled = styled(Button)`
  font-size: 1.5em;
  width: 7.5rem;

  &:hover {
    cursor: pointer;
  }
`;

const Page404 = () => (
  <LinkStyled to="/">
    <Text>404 Página não encontrada</Text>
    <ButtonStyled>Voltar</ButtonStyled>
  </LinkStyled>
);

export default Page404;
