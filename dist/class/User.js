"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerRank = exports.getPlayer = void 0;
const index_1 = require("../index");
function getPlayer(req, res) {
    let PInfo;
    let matchId;
    index_1.getPlayerInfo(req.params.params).then(async (value) => {
        var data = value.data;
        var responseMatch = await index_1.lastMatch(data.puuid);
        matchId = responseMatch.data[0];
        var getMatchId = await index_1.getMatch(matchId);
        getMatchId = getMatchId.data.info;
        index_1.getRankPlayer(data.id).then(value => {
            let rankingSolo = value.data[0];
            let rankingFlex = value.data[1];
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
            };
            return res.json(PInfo);
        }).catch(err => {
            return res.json(err);
        });
    }).catch(error => {
        return res.json(error);
    });
}
exports.getPlayer = getPlayer;
function getPlayerRank(req, res) {
}
exports.getPlayerRank = getPlayerRank;
