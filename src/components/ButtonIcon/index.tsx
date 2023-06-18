import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import * as S from './styles';

type Props = TouchableOpacityProps & {
    name: keyof typeof MaterialIcons.glyphMap;
    type?: S.ButtonIconTypeStyleProp;
}

export function ButtonIcon({ name, type = 'PRIMARY', ...rest }: Props) {
    return (
        <S.Container {...rest}>
            <S.Icon
                type={type}
                name={name}
            />
        </S.Container>
    )
}