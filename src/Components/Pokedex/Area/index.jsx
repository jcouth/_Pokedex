import React from "react";
import { LeftSection, RightSection, LeftArea, RightArea } from "./styles.js";

const PokedexArea = ({ children, right, flexGrow, width }) => (
  <>
    {right ? (
      <RightSection flexGrow={flexGrow} width={width}>
        <RightArea>{children}</RightArea>
      </RightSection>
    ) : (
      <LeftSection flexGrow={flexGrow} width={width}>
        <LeftArea>{children}</LeftArea>
      </LeftSection>
    )}
  </>
);

export default PokedexArea;
