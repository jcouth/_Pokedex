import styled from "styled-components";
import { black, white, defaultBorderRadius } from "../../UI/variaveis";
import { Button } from "../../UI";

export const SearchArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

export const StyledInput = styled.input`
  font-size: 1.3em;
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: ${defaultBorderRadius};
  background: ${black};
  color: ${white};
`;

export const RoundButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ButtonStyled = styled(Button).attrs({
  width: "100%",
  height: "100%",
})``;
