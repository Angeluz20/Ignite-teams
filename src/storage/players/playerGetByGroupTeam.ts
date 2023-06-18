import { PlayerGetAll } from "./playersGetAll";

export async function PlayersGetByGroupAndTeam(group: string, team: string){
    try {
        const storage = await PlayerGetAll(group);

        const players = storage.filter(player => player.team === team);

        return players
    } catch (error) {
        throw error;
    }
}