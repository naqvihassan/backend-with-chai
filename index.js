require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
    "login": "naqvihassan",
    "id": 168823161,
    "node_id": "U_kgDOChAJeQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/168823161?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/naqvihassan",
    "html_url": "https://github.com/naqvihassan",
    "followers_url": "https://api.github.com/users/naqvihassan/followers",
    "following_url": "https://api.github.com/users/naqvihassan/following{/other_user}",
    "gists_url": "https://api.github.com/users/naqvihassan/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/naqvihassan/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/naqvihassan/subscriptions",
    "organizations_url": "https://api.github.com/users/naqvihassan/orgs",
    "repos_url": "https://api.github.com/users/naqvihassan/repos",
    "events_url": "https://api.github.com/users/naqvihassan/events{/privacy}",
    "received_events_url": "https://api.github.com/users/naqvihassan/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 1,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-05-03T10:24:55Z",
    "updated_at": "2024-05-11T20:08:01Z"
  }
app.get('/', (req, res) => {
    res.send('Hello World from hassan!')
})
app.get('/twitter', (req, res) => {
    res.send('naqvihassan01');
})

app.get('/login', (req,res) =>{
    res.send('<h1>Please login here</h1>')
})

app.get('/youtube', (req,res) =>{
    res.send('<h2>Chai wala yt best</h2>')
})

app.get('/github', (req, res) =>{
    res.json(githubData);
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})