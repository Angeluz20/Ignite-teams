import { useEffect, useState, useRef } from 'react';
import { Alert, FlatList, TextInput } from 'react-native';
import * as S from './styles';
//components
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { PlayerCard } from '@components/PlayerCard';
import { Button } from '@components/Button';
import { ListEmpty } from '@components/ListEmpty';
import { useNavigation, useRoute } from '@react-navigation/native';
// instance error
import { AppError } from '@utils/AppError';
// storages
import { PlayerAddByGroup } from '@storage/players/playerAddByGroup';
import { PlayersGetByGroupAndTeam } from '@storage/players/playerGetByGroupTeam';
import { PlayerStorageDTO } from '@storage/players/PlayerStorageDTO';
import { playerRemoveByGroup } from '@storage/players/playerRemoveByGroup';
import { groupeRemoveByGroup } from '@storage/group/groupRemoveByName';

type RouteParams = {
    group: string
}

export function Players() {

    const [newPlayersName, setNewPlayers] = useState('');
    const [team, setTeams] = useState('Time A');
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

    const route = useRoute();
    const { group } = route.params as RouteParams;

    const newPlayersNameInputRef = useRef<TextInput>(null);

    const navigate = useNavigation()

    async function handleAddPlayers() {
        if (newPlayersName.trim().length === 0) {
            return Alert.alert('Nova pesssoa', 'Informe o nome do participante');
        }

        const newPlayer = {
            name: newPlayersName,
            team,
        }

        try {
            await PlayerAddByGroup(newPlayer, group);

            newPlayersNameInputRef.current?.blur();//tira o foco do input

            setNewPlayers('');
            fetchPlayersByTeams();

        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Erro ao adicionar a pesssoa', 'Tente novamente');
            } else {
                Alert.alert('Nova pessoa', 'Não foi possível adcionar a pesssoa');
            }
        }
    }

    async function fetchPlayersByTeams() {
        try {

            const playersByTeams = await PlayersGetByGroupAndTeam(group, team);
            setPlayers(playersByTeams);

        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Erro ao buscar pessoas', 'Tente novamente');
            } else {
                Alert.alert('Erro', 'ao buscar os participantes');
            }
            console.log(error);
        }
    }

    async function handleRemovePlayer(name: string) {
        try {
            await playerRemoveByGroup(name, group);
            fetchPlayersByTeams()
        } catch (error) {
            Alert.alert('Erro ao excluir', 'nao foi possível excluir o participante');
        }
    }

    async function groupRemove() {
        try {
            await groupeRemoveByGroup(group);
            Alert.alert('Remover Grupo', 'grupo removido com sucesso!');
            navigate.navigate('groups')
        } catch (error) {
            Alert.alert('Remover Grupo', 'Não foi possível remover a grupo');
            console.log(error);
        }
    }
    async function handleRemoveGroup() {
        Alert.alert(
            'Remover',
            'Deseja remver o grupo?',
            [
                { text: "Não", style: "cancel" },
                { text: "Sim", onPress: () => groupRemove() }
            ])

    }

    useEffect(() => {
        fetchPlayersByTeams();
    }, [team])

    return (
        <S.Container>
            <Header showBackButton />

            <S.Content>
                <Highlight
                    title={group}
                    subtitle='adicione a galera e separe os times'
                />

                <Input
                    inputRef={newPlayersNameInputRef}
                    placeholder='Nome do participante'
                    autoCorrect={false}
                    showIcon
                    press={handleAddPlayers}
                    value={newPlayersName}
                    onChangeText={setNewPlayers}
                    onSubmitEditing={handleAddPlayers}
                    returnKeyType='done'
                />

                <S.HeaderList>
                    <FlatList
                        data={['Time A', 'Time B']}
                        keyExtractor={item => item}
                        renderItem={
                            ({ item }) => (
                                <Filter
                                    isActive={item === team}
                                    onPress={() => setTeams(item)}
                                    title={item}
                                />
                            )
                        }
                        horizontal
                    />

                    <S.AccontTeams>
                        {players.length}
                    </S.AccontTeams>

                </S.HeaderList>

                <FlatList
                    data={players}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => {
                        return (

                            <PlayerCard
                                name={item.name}
                                remove={() => handleRemovePlayer(item.name)}
                            />
                        )
                    }}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[{
                        paddingBottom: 100
                    },
                    players.length === 0 && { flex: 1 }
                    ]}
                    ListEmptyComponent={() => (
                        <ListEmpty message={'Não há  participante nesse time'} />
                    )}
                />


            </S.Content>

            <Button onPress={handleRemoveGroup} title='Remover Turma' type={'SECONDARY'} />

        </S.Container>
    )
}
