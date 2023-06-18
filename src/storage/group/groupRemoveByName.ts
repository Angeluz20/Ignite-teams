import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION, PLAYERS_COLLECTION } from "@storage/storageConfig";
import { groupGetAll } from "./groupsGetAll";

export async function groupeRemoveByGroup(groupName: string) {

    try {
        const group = await groupGetAll();

        const filterd = group.filter(groups => groups !== groupName);

        await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(filterd))

        await AsyncStorage.removeItem(`${PLAYERS_COLLECTION}-${filterd}`)

    } catch (error) {
        throw error
    }
}