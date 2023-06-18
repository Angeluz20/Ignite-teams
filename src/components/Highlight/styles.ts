import styled, { css } from "styled-components/native";

export const Container = styled.View`
   width: 100%;
   height: 50px;
   margin: 32px 0;
   justify-content: center;
   align-items: center;
`
export const Title = styled.Text`
    ${({ theme }) => css`
     color: ${theme.COLORS.WHITE};
     font-family: ${theme.FONT_FAMILY.BOLD};
     font-size: ${theme.FONT_SIZE.XL}px;
    `}
`
export const Subtitle = styled.Text`
   ${({ theme }) => css`
     color: ${theme.COLORS.GRAY_300};
     font-family: ${theme.FONT_FAMILY.REGULAR};
     font-size: ${theme.FONT_SIZE.SM}px;
    `}
`