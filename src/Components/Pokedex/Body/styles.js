import styled from "styled-components";

export const FlexArea = styled.main`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  justify-content: ${(props) => (props.justify ? props.justify : "")};
  align-items: ${(props) => (props.align ? props.align : "")};
`;
