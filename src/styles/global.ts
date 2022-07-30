import styled from "styled-components/native";

export interface TitleProps {
  fontSize?: string;
  marginBottom?: string;
}

export const Title = styled.Text<TitleProps>`
  font-family: "Poppins_600SemiBold";
  font-size: ${({ fontSize }) => fontSize ?? "24px"};
  color: white;
  margin-bottom: ${({ marginBottom }) => marginBottom ?? "0px"};
`;

export interface SubtitleProps {
  fontSize?: string;
  marginBottom?: string;
  color?: string;
}

export const Subtitle = styled.Text<SubtitleProps>`
  font-family: "Poppins_600SemiBold";
  font-size: ${({ fontSize }) => fontSize ?? "10px"};
  margin-top: -8px;
  margin-bottom: ${({ marginBottom }) => marginBottom ?? "0px"};
  color: ${({ theme, color }) => color ?? theme.COLORS.TEXT_50};
`;
