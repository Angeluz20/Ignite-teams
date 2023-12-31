import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYERS_COLLECTION } from "@storage/storageConfig";
import { PlayerGetAll } from "./playersGetAll";

export async function playerRemoveByGroup(playerName: string, group:string) {
    try{
        const storage = await PlayerGetAll(group);

        const filterd = storage.filter(player => player.name !== playerName);

        const players = JSON.stringify(filterd)

        await AsyncStorage.setItem(`${PLAYERS_COLLECTION}-${group}`, players)

    }catch(error){
        throw error
    }
    
}