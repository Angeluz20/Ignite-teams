import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";
import { Plus } from "phosphor-react-native";

export const ContainerInput = styled.View`
    width: 100%;

    border-radius: 6px;
    margin-bottom: 20px;
    min-height: 56px;
    max-height: 56px;

    flex-direction: row;
    justify-content: space-between;

    ${({ theme }) => css`
     color: ${theme.COLORS.GRAY_100};
     background-color: ${theme.COLORS.GRAY_700};
    `}
   
`
export const Input = styled(TextInput)`
    width: 90%;

    border-radius: 6px;
    padding-left: 10px;
    
    ${({ theme }) => css`
     color: ${theme.COLORS.GRAY_100};
     font-size: ${theme.FONT_SIZE.MD}px;
     background-color: ${theme.COLORS.GRAY_700};
    `}

`
export const ContainerIcon = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
`
export const IconPlus = styled(Plus).attrs(({ theme }) => ({
    size: 33,
    color: theme.COLORS.GREEN_500,
}))``