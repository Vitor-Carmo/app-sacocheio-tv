import styled from "styled-components/native";

export interface TitleProps {
  fontSize?: string;
  marginBottom?: string;
  marginTop?: string;
  color?: string | null;
  flex?: "none" | number;
  align?: string;
}

export const Title = styled.Text<TitleProps>`
  font-family: "Poppins_600SemiBold";
  flex: ${({ flex }) => flex ?? "none"};
  font-size: ${({ fontSize }) => fontSize ?? "24px"};
  color: ${({ theme, color }) => color ?? theme.COLORS.TEXT};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? "0px"};
  margin-top: ${({ marginTop }) => marginTop ?? "0px"};
  text-align: ${({ align }) => align ?? "left"};
`;

export interface SubtitleProps {
  fontSize?: string;
  marginBottom?: string;
  marginTop?: string;
  color?: string;
}

export const Subtitle = styled.Text<SubtitleProps>`
  font-family: "Poppins_600SemiBold";
  font-size: ${({ fontSize }) => fontSize ?? "10px"};
  margin-top: ${({ marginTop }) => marginTop ?? "-8px"};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? "0px"};
  color: ${({ theme, color }) => color ?? theme.COLORS.TEXT_50};
`;
