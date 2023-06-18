import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppError } from "@utils/AppError";

import { PLAYERS_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { PlayerGetAll } from "./playersGetAll";

export async function PlayerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
    try {

        const playersStorage = await PlayerGetAll(group);
        
        const playerAlreadyExists = playersStorage.filter(players => players.name === newPlayer.name)

        if (playerAlreadyExists.length > 0) {
            throw new AppError("O participante já existe.");
        }

        const storage = JSON.stringify([...playersStorage, newPlayer]);

        await AsyncStorage.setItem(`${PLAYERS_COLLECTION}-${group}`, storage);

    } catch (error) {
        throw error
    }
}