import React from "react";
import { PokedexDiviserStyled } from "./styles.js";

const PokedexDiviser = ({
  height,
  borderTopColor,
  borderBottomColor,
  topLeftRadius,
  topRightRadius,
  bottomLeftRadius,
  bottomRightRadius,
  pseudoTopLeftRadius,
  pseudoTopRightRadius,
  pseudoBottomLeftRadius,
  pseudoBottomRightRadius,
}) => (
  <PokedexDiviserStyled
    height={height}
    borderTopColor={borderTopColor}
    borderBottomColor={borderBottomColor}
    topLeftRadius={topLeftRadius}
    topRightRadius={topRightRadius}
    bottomLeftRadius={bottomLeftRadius}
    bottomRightRadius={bottomRightRadius}
    pseudoTopLeftRadius={pseudoTopLeftRadius}
    pseudoTopRightRadius={pseudoTopRightRadius}
    pseudoBottomLeftRadius={pseudoBottomLeftRadius}
    pseudoBottomRightRadius={pseudoBottomRightRadius}
  />
);

export default PokedexDiviser;
