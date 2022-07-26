import styled from "styled-components/native";

export const Container = styled.View`
  margin-bottom: 30px;
`;

export const Row = styled.View<{ marginBottom?: string }>`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${({ marginBottom }) => marginBottom ?? "0px"};
`;
