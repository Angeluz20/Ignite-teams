import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};

    padding: 24px;
`;

export const Content = styled.View`
    flex: 1;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const HeaderList = styled.View`
    width: 100%;
    
    flex-direction: row;
    align-items: center;
    margin: 32px 0 12px;
`;

export const AccontTeams = styled.Text`
   ${({ theme }) => css`
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
        font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
   `}

`