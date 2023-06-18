import { useState } from 'react';
import * as S from './styles';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { Highlight } from '@components/Highlight';
import { useNavigation } from '@react-navigation/native';
import { groupCreate } from '@storage/group/groupCreate';
import { useToast } from 'react-native-toast-notifications';
import { AppError } from '@utils/AppError';

export function NewGroup() {
    const navigation = useNavigation();
    const [group, setGroup] = useState('');

    const toast = useToast()
    async function handleCreateGroup() {
        try {
            if(group.trim().length === 0) {
                toast.show("Informe o nome da turma!", {
                    animationType: "slide-in",
                    placement: "top",
                    type: "warning",
                    duration: 2000
                });
                return;
            }

            await groupCreate(group);
            navigation.navigate('players', { group })

            toast.show("Grupo criado com sucesso!", {
                animationType: "slide-in",
                placement: "top",
                type: "success",
                duration: 2000
            });

        } catch (error) {
            console.log(error.message);

            if (error instanceof AppError) {
                toast.show(error.message, {
                    animationType: "slide-in",
                    placement: "bottom",
                    type: "warning",
                    duration: 2000
                });
            }

        }
    }

    return (
        <S.Container>
            <Header showBackButton />

            <S.Content>
                <S.Icon />

                <Highlight
                    title={'Nova Turma'}
                    subtitle={'crie uma turma para adicionar as pessoas'}
                />

                <Input
                    placeholder='Nome da turma'
                    value={group}
                    onChangeText={setGroup}
                />

                <Button title='Criar' onPress={handleCreateGroup} />
            </S.Content>
        </S.Container>
    )
}