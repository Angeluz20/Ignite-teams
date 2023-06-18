import styled, { css } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";
export const Container = styled.View`
    width: 100%;
    height: 56px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_500};

    align-items: center;
    flex-direction: row;

    margin-bottom: 16px;
    border-radius: 6px;
`;

export const Name = styled.Text`
 flex: 1;
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
 `}
`
export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_200
}))`
    margin-left: 16px;
    margin-right: 10px;
`

export const Remove = styled(TouchableOpacity)`
   height: 100%;
   align-items: center;
   justify-content: center;
`