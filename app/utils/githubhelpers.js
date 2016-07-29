/**
 * Created by carlos on 2016-07-07.
 */
import axios from 'axios'

const id = "YOUR_CLIENT_ID";
const sec = "YOUR_SECRET_ID";
const param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username)
}

const  getRepos = (userName) => {
    return axios.get('https://api.github.com/users/' + userName + '/repos' + param + '&per_page=100')
}

const getTotalStars = (repos) => {

    return repos.data.reduce(function (prev, current) {
        return prev + current.stargazers_count;
    }, 0)

}

const getPlayersData = (player) => {
    return getRepos(player.login)
    .then(getTotalStars)
    .then(function (totalstars) {
        return {
            followers: player.followers,
            totalStars: totalstars
        }
    })

}

const calculateScore = (players) => {
 return[
     players[0].followers * 3 + players[0].totalStars,
     players[1].followers * 3 + players[1].totalStars
 ]
}
const helpers = {
    getPlayersInfo: function (players) {
        return axios.all(players.map(function(username) {
            return getUserInfo(username)
        })).then(function(info){
            return info.map(function(user){
                return user.data;
            })
        }).catch(function(err) {
            console.warn('error in playersInfo', err)
        })
    },
    battle : function (players) {
        const playerOneData = getPlayersData(players[0]);
        const playerTwoData = getPlayersData(players[1]);

        return axios.all([playerOneData, playerTwoData])
        .then(calculateScore)
        .catch(function (err) {console.warn('Error in getPlayersInfo: ',err)})
    }
};

module.exports = helpers;