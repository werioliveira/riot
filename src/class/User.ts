import {getPlayerInfo, getRankPlayer, lastMatch, getMatch} from '../index'
import {Player, Ranking} from '../models/User'
import {request, Request, Response} from 'express'


    function getPlayer(req: Request,res: Response){
        let PInfo: Player;
        let matchId: string;
        getPlayerInfo(req.params.params).then(async value =>{
            var data = value.data
            var responseMatch = await lastMatch(data.puuid)
            matchId = responseMatch.data[0]
            var getMatchId = await getMatch(matchId)
            getMatchId = getMatchId.data.info
            getRankPlayer(data.id).then(value =>{
               // data = data + value;  
               if(value.data[1]==null){
                   value.data[1] = []
               }
               let rankingSolo = value.data[0]
               let rankingFlex = value.data[1]
               PInfo = {
                id: data.id,
                puuid: data.puuid,
                summonerLevel: data.summonerLevel,
                name: data.name,
                profileIconId: data.profileIconId,
                ranking: [
                    {
                        leagueId: rankingSolo.leagueId,
                        queueType: rankingSolo.queueType,
                        tier: rankingSolo.tier,
                        rank: rankingSolo.rank,
                        leaguePoints: rankingSolo.leaguePoints,
                        wins: rankingSolo.wins,
                        losses: rankingSolo.losses
                    },
                    {
                        leagueId: rankingFlex.leagueId,
                        queueType: rankingFlex.queueType,
                        tier: rankingFlex.tier,
                        rank: rankingFlex.rank,
                        leaguePoints: rankingFlex.leaguePoints,
                        wins: rankingFlex.wins,
                        losses: rankingFlex.losses                    
                    }
                ],
                lastMatchId: matchId,
                lastMatchInfo: getMatchId
                
               }
                return res.json (PInfo)
            
            }).catch(err =>{
                return res.json(err)
            })
            
            
        }).catch(error =>{
            return res.json(error)
        })  
       //return res.json(PlayerInfo)
    }

    function index(req: Request, res: Response){
            return res.json('Digite o Nome após a / do url')
    }
    function getPlayerRank(req: Request, res: Response){

    }
export {
    getPlayer,
    getPlayerRank,
    index
}

