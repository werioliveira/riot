export type User = {
    id: number,
    name: string,
    level: string,
}
export interface Player{
    name: string,
    id: string,
    puuid: string,
    profileIconId: number,
    summonerLevel: number,
    ranking: Array<Ranking>,
    lastMatchId: string,
    lastMatchInfo: Object
}
export interface Ranking{
    leagueId: String,
    queueType?: String,
    tier?: String,
    rank?: String,
    leaguePoints?: number,
    wins?: number,
    losses?: number  
}

