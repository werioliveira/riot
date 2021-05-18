import axios from 'axios'
const baseURL =
  'https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'

async function getPlayerInfo(username: string) {
  const result = axios({
    method: 'GET',
    url: baseURL + `${username}`,
    headers: {
      'X-Riot-Token': process.env.riotkey,
    },

  })
  return result
}
async function getRankPlayer(id:string) {
  const result = axios({
    method: 'GET',
    url: "https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/" + `${id}`,
    headers:{
      'X-Riot-Token': process.env.riotkey,
    },
  })
  return result;
}
async function lastMatch(puuid: string){
  const result = axios({
    method: 'GET',
    url: 'https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/' + `${puuid}` + '/' +'ids?start=0&count=1',
    headers:{
      'X-Riot-Token': process.env.riotkey,
    },

    
  })
  return result;
}
async function getMatch(matchId: string){
  const result = axios({
    method: 'GET',
    url: 'https://americas.api.riotgames.com/lol/match/v5/matches/'+`${matchId}`,
    headers:{
      'X-Riot-Token': process.env.riotkey,
    },
  })
  return result;
}
//async function get
export{
  getPlayerInfo,
  getRankPlayer,
  lastMatch,
  getMatch
}
//export default getPlayerInfo
