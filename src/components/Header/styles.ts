import { CaretLeft } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`
export const Logo = styled.Image`
    width: 46px;
    height: 55px;
`
export const BackButton = styled.TouchableOpacity`
    flex: 1;
`
export const IconLeft = styled(CaretLeft).attrs(({ theme}) => ({
    size: 40,
    color: theme.COLORS.WHITE
}))`

`
