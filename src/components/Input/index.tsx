import React from 'react';
import * as S from './styles';
import { TextInput, TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

type Props = TextInputProps & {
    showIcon?: boolean,
    press?: () => void,
    inputRef?: React.RefObject<TextInput>;
}

export function Input({ showIcon = false, press, inputRef,...rest }: Props) {
    const { COLORS } = useTheme()

    return (
        <S.ContainerInput>
            <S.Input
                ref={inputRef}
                placeholderTextColor={COLORS.GRAY_300}
                {...rest} />
            {showIcon &&
                <S.ContainerIcon onPress={press}>
                    <S.IconPlus />
                </S.ContainerIcon>
            }
        </S.ContainerInput>
    )
}