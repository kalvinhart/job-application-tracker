import styled, { RuleSet, css } from "styled-components";

export const H1 = styled.h1`
  margin-bottom: 20px;
`;

export const H2 = styled.h2`
  margin-bottom: 20px;
`;

export const H3 = styled.h3`
  margin-bottom: 20px;
`;

export const H4 = styled.h4`
  margin-bottom: 20px;
`;

type SpanProps = {
  $fontSize?: number;
  $fontColor?: string;
  $bold?: boolean;
  $marginBottom?: boolean;
};
export const Span = styled.span<SpanProps>`
  ${({ $fontSize = 16, $fontColor, $bold, $marginBottom }): RuleSet<object> => css`
    font-size: ${$fontSize}px;

    ${$fontColor && `color: ${$fontColor};`}

    ${$bold && "font-weight: bold;"}

    ${$marginBottom && "margin-bottom: 20px;"}
  `}
`;

type SpanErrorProps = {
  $fontSize?: number;
  $bold?: boolean;
  $marginBottom?: boolean;
};
export const SpanError = styled.span<SpanErrorProps>`
  ${({ $fontSize = 16, $bold, $marginBottom }): RuleSet<object> => css`
    font-size: ${$fontSize}px;

    ${$bold && "font-weight: bold;"}

    ${$marginBottom && "margin-bottom: 20px;"}
  `}
`;
