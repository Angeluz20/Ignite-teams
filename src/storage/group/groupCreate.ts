import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { groupGetAll } from "./groupsGetAll";

//precisa do nome para criar o grupo então passamos como parametro 'newGroupCreate'
export async function groupCreate(newGroupCreate: string){
    try {
        //buscar informação no storage
        const storageGroups = await groupGetAll()
        
        const groupAlreadyExists = storageGroups.includes(newGroupCreate)

        if(groupAlreadyExists){
            
            throw new AppError('Já existe um grupo com esse nome');
        }

        const storage = JSON.stringify([...storageGroups, newGroupCreate])
                                    //chave         //valor
        await AsyncStorage.setItem(GROUP_COLLECTION, storage);
        
    } catch (error) {
        console.log(error)
        throw error;
    }

}