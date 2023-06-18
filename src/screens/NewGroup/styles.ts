import { UsersThree } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;

    padding: 24px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`
export const Content = styled.View`
    flex: 1;
    width: 100%;
    justify-content: center;
`
export const Icon = styled(UsersThree).attrs(({theme}) => ({
    size:56,
    color: theme.COLORS.GREEN_700,
}))`
    align-self: center;
`