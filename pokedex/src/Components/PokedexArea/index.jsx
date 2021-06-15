import React from "react";
import styled from "styled-components";
import {
  primary,
  white,
  defaultBorderColor,
  defaultBorderSize,
  defaultBorderRadius,
} from "../UI/variaveis";

const StyledSection = styled.section`
  flex-grow: ${(props) => (props.flexGrow ? props.flexGrow : 0)};
  max-width: 50vw;
  padding: 1rem;
  border: ${defaultBorderSize} solid ${defaultBorderColor};
  border-radius: ${defaultBorderRadius};
  background: ${primary};
`;

const Area = styled.div`
  padding: 1rem;
  height: 60vh;
  border: ${defaultBorderSize} solid ${defaultBorderColor};
  border-radius: ${defaultBorderRadius};
`;

const LeftArea = styled(Area)`
  border-bottom-left-radius: 2rem;
  background: ${white};
`;

const RightArea = styled(Area)`
  border-bottom-right-radius: 2rem;
  background: ${primary};
`;

const PokedexArea = ({ children, right, flexGrow }) => (
  <StyledSection flexGrow={flexGrow}>
    {right ? (
      <RightArea>{children}</RightArea>
    ) : (
      <LeftArea>{children}</LeftArea>
    )}
  </StyledSection>
);

export default PokedexArea;
