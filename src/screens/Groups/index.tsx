import { useState, useCallback } from 'react';
import * as S from './styles'
//components
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { Loading } from '@components/Load';
import { FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { groupGetAll } from '@storage/group/groupsGetAll';


export function Groups() {
  const [isLoading, setIsLoading] = useState(false)
  const [groups, setGroups] = useState<string[]>([])
  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('newGroup')
  }

  async function fetchGroups() {
    try {
      setIsLoading(true)
      const storage = await groupGetAll();
      setGroups(storage);
      setIsLoading(false)

    } catch (error) {
      console.log(error);
    }finally{
      setIsLoading(false)
    }
  }

  function handleAcessGroup(group: string) {
    navigation.navigate('players', { group })
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []))

  return (
    <S.Container>
      <Header />

      <Highlight
        title='Turmas'
        subtitle='Crie uma turma para adicionar pessoas'
      />
      {isLoading ? <Loading /> :
        <FlatList
          data={groups}
          ListEmptyComponent={<ListEmpty message='Nenhuma turma adicionada' />}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          style={{ flex: 1, width: "100%", marginBottom: 15 }}
          keyExtractor={item => item}
          renderItem={({ item }) => {
            return (
              <GroupCard onPress={() => handleAcessGroup(item)} title={item} />
            )
          }}
        />
      }


      <Button onPress={handleNewGroup} title='Criar nova turma' />
    </S.Container>
  );
}


