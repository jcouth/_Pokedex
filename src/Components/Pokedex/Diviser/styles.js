import styled from "styled-components";
import { Diviser } from "../../UI";

export const PokedexDiviserStyled = styled(Diviser)`
  height: ${(props) => (props.height ? props.height : "")};
  border-top-color: ${(props) =>
    props.borderTopColor ? props.borderTopColor : ""};
  border-bottom-color: ${(props) =>
    props.borderBottomColor ? props.borderBottomColor : ""};
  border-top-left-radius: ${(props) =>
    props.topLeftRadius ? props.topLeftRadius : ""};
  border-top-right-radius: ${(props) =>
    props.topRightRadius ? props.topRightRadius : ""};
  border-bottom-left-radius: ${(props) =>
    props.bottomLeftRadius ? props.bottomLeftRadius : ""};
  border-bottom-right-radius: ${(props) =>
    props.bottomRightRadius ? props.bottomRightRadius : ""};

  &::before {
    border-top-color: ${(props) =>
      props.borderTopColor ? props.borderTopColor : ""};
    border-bottom-color: ${(props) =>
      props.borderBottomColor ? props.borderBottomColor : ""};
    border-top-left-radius: ${(props) =>
      props.pseudoTopLeftRadius ? props.pseudoTopLeftRadius : ""};
    border-top-right-radius: ${(props) =>
      props.pseudoTopRightRadius ? props.pseudoTopRightRadius : ""};
    border-bottom-left-radius: ${(props) =>
      props.pseudoBottomLeftRadius ? props.pseudoBottomLeftRadius : ""};
    border-bottom-right-radius: ${(props) =>
      props.pseudoBottomRightRadius ? props.pseudoBottomRightRadius : ""};
  }

  &::after {
    border-top-color: ${(props) =>
      props.borderTopColor ? props.borderTopColor : ""};
    border-bottom-color: ${(props) =>
      props.borderBottomColor ? props.borderBottomColor : ""};
    border-top-left-radius: ${(props) =>
      props.pseudoTopLeftRadius ? props.pseudoTopLeftRadius : ""};
    border-top-right-radius: ${(props) =>
      props.pseudoTopRightRadius ? props.pseudoTopRightRadius : ""};
    border-bottom-left-radius: ${(props) =>
      props.pseudoBottomLeftRadius ? props.pseudoBottomLeftRadius : ""};
    border-bottom-right-radius: ${(props) =>
      props.pseudoBottomRightRadius ? props.pseudoBottomRightRadius : ""};
  }
`;