import React from "react";
import PokedexDiviser from "../Diviser";
import { defaultBorderSize, yellow, green } from "../../UI/variaveis";
import {
  Header,
  HeaderArea,
  HeaderAreaHelper,
  RoundButtonOutside,
  RoundButtonInside,
  Shine,
  GroupArea,
  RoundedButtonSpanStyled,
} from "./styles.js";

const PokedexHeader = ({ leftWidth, rightWidth }) => (
  <Header>
    <HeaderArea width={leftWidth} bottomLeftRadius={"0"}>
      <HeaderAreaHelper
        width={leftWidth < rightWidth ? leftWidth : rightWidth}
        bottom={`-${defaultBorderSize}`}
        right={`-${defaultBorderSize}`}
        pseudoLeft={"-5rem"}
        pseudoLeftBorder={"5rem"}
      />
      <RoundButtonOutside>
        <RoundButtonInside>
          <Shine />
        </RoundButtonInside>
      </RoundButtonOutside>
      <GroupArea>
        <RoundedButtonSpanStyled />
        <RoundedButtonSpanStyled background={yellow} />
        <RoundedButtonSpanStyled background={green} />
      </GroupArea>
    </HeaderArea>
    <PokedexDiviser
      height={`calc(3rem + ${defaultBorderSize})`}
      borderBottomColor={"transparent"}
      topLeftRadius={"0"}
      topRightRadius={"0"}
      bottomLeftRadius={"0"}
      bottomRightRadius={"0"}
      pseudoBottomLeftRadius={"0"}
      pseudoBottomRightRadius={"0"}
    />
    <HeaderArea
      width={rightWidth}
      topLeftRadius={"0"}
      bottomLeftRadius={"0"}
      bottomRightRadius={"0"}
      borderTopColor={"transparent"}
      borderRightColor={"transparent"}
      borderBottomColor={"transparent"}
      borderLeftColor={"transparent"}
      background={"transparent"}
    >
      <HeaderAreaHelper
        width={leftWidth < rightWidth ? leftWidth : rightWidth}
        bottom={`-${defaultBorderSize}`}
        left={`-${defaultBorderSize}`}
        pseudoRight={"-5rem"}
        pseudoRightBorder={"5rem"}
      />
    </HeaderArea>
  </Header>
);

export default PokedexHeader;
