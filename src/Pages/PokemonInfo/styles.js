import styled from "styled-components";
import {
  black,
  blue,
  defaultBorderRadius,
  primary,
  tertiary,
  white,
} from "../../Components/UI/variaveis";
import {
  GridArea,
  PokeName,
  PokeId,
  Image,
} from "../../Components/UI";

export const PokemonInfoStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  background: ${white};
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

export const PokeNameStyled = styled(PokeName)`
  font-size: 2em;
  margin-right: 0.5rem;
`;

export const PokeIdStyled = styled(PokeId)`
  font-size: 2em;
  font-weight: 500;
  margin-left: 0.5rem;
`;

export const LargeImage = styled(Image)`
  flex-grow: 0;
  width: 288px;
  height: 288px;
`;

export const GridAreaStyled = styled(GridArea)`
  flex-grow: 1;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: ${defaultBorderRadius};
  background: ${blue};
`;

export const PokeTitle = styled.p`
  color: ${white};
`;

export const PokeInfo = styled.div`
  font-size: 1.2em;
`;

export const Text = styled.p`
  font-size: 1.2em;
  color: ${black};
  margin: 1rem 0 0.25rem;
`;

export const BottomArea = styled.div`
  padding: 1rem;
  margin-top: 1rem;
  border-radius: ${defaultBorderRadius};

  background: ${black};
`;