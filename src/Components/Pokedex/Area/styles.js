import styled from "styled-components";
import {
  primary,
  white,
  defaultBorderColor,
  defaultBorderSize,
  defaultBorderRadius,
} from "../../UI/variaveis";

export const StyledSection = styled.section`
  flex-grow: ${(props) => (props.flexGrow ? props.flexGrow : 0)};
  width: ${(props) => (props.width ? props.width : "30vw")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "50vw")};
  padding: 1rem;
  border: ${defaultBorderSize} solid ${defaultBorderColor};
  border-radius: ${defaultBorderRadius};
  background: ${primary};
`;

export const LeftSection = styled(StyledSection)`
  border-top: ${defaultBorderSize} solid transparent;
  border-right: ${defaultBorderSize} solid transparent;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const RightSection = styled(StyledSection)`
  border-left: ${defaultBorderSize} solid transparent;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export const Area = styled.div`
  padding: 1rem;
  height: 60vh;
  border: ${defaultBorderSize} solid ${defaultBorderColor};
  border-radius: ${defaultBorderRadius};
`;

export const LeftArea = styled(Area)`
  border-bottom-left-radius: 2rem;
  background: ${white};
`;

export const RightArea = styled(Area)`
  border-bottom-right-radius: 2rem;
  background: ${primary};
`;
