import * as S from './styles';
import { ButtonIcon } from '@components/ButtonIcon';
type Props = {
    name: string;
    remove: () => void
}

export function PlayerCard({ name, remove }: Props) {
    return (
        <S.Container>

            <S.Icon
                name='person'
            />

            <S.Name>
                {name}
            </S.Name>

            <ButtonIcon
                onPress={() => remove()}
                name='close'
                type={'SECONDARY'}
            />

        </S.Container>
    )
}