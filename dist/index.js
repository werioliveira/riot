"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMatch = exports.lastMatch = exports.getRankPlayer = exports.getPlayerInfo = void 0;
const axios_1 = __importDefault(require("axios"));
const baseURL = 'https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/';
async function getPlayerInfo(username) {
    const result = axios_1.default({
        method: 'GET',
        url: baseURL + `${username}`,
        headers: {
            'X-Riot-Token': process.env.riotkey,
        },
    });
    return result;
}
exports.getPlayerInfo = getPlayerInfo;
async function getRankPlayer(id) {
    const result = axios_1.default({
        method: 'GET',
        url: "https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/" + `${id}`,
        headers: {
            'X-Riot-Token': process.env.riotkey,
        },
    });
    return result;
}
exports.getRankPlayer = getRankPlayer;
async function lastMatch(puuid) {
    const result = axios_1.default({
        method: 'GET',
        url: 'https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/' + `${puuid}` + '/' + 'ids?start=0&count=1',
        headers: {
            'X-Riot-Token': process.env.riotkey,
        },
    });
    return result;
}
exports.lastMatch = lastMatch;
async function getMatch(matchId) {
    const result = axios_1.default({
        method: 'GET',
        url: 'https://americas.api.riotgames.com/lol/match/v5/matches/' + `${matchId}`,
        headers: {
            'X-Riot-Token': process.env.riotkey,
        },
    });
    return result;
}
exports.getMatch = getMatch;
