import * as S from './styles'

type Text = {
    title: string,
    subtitle: string,
}

export function Highlight({ title, subtitle }: Text) {
    return (
        <S.Container>
            <S.Title>
                {title}
            </S.Title>
            <S.Subtitle>
                {subtitle}
            </S.Subtitle>
        </S.Container>
    )
}