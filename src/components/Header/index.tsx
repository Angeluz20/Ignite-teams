import * as S from './styles'
import logo from '../../assets/logo.png'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps &{
    showBackButton?: boolean
}

export function Header({ showBackButton = false }: Props) {
    const navigation = useNavigation()

    return (
        <S.Container>
            {showBackButton &&
                <S.BackButton onPress={() => navigation.navigate('groups')}>
                    <S.IconLeft />
                </S.BackButton>
            }

            <S.Logo source={logo} />
        </S.Container>
    )
}