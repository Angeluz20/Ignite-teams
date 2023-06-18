import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYERS_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export async function PlayerGetAll(group: string) {
    try {
        const storage = await AsyncStorage.getItem(`${PLAYERS_COLLECTION}-${group}`);

        const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : [];

        console.log(players)
        return players
    } catch (error) {
        throw error
    }
}