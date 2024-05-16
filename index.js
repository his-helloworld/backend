const express = require('express')
const app = express()
const port = 3000
const githubData =  {
            "login": "hishelloworld",
            "id": 146417764,
            "node_id": "U_kgDOCLooZA",
            "avatar_url": "https://avatars.githubusercontent.com/u/146417764?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/hishelloworld",
            "html_url": "https://github.com/hishelloworld",
            "followers_url": "https://api.github.com/users/hishelloworld/followers",
            "following_url": "https://api.github.com/users/hishelloworld/following{/other_user}",
            "gists_url": "https://api.github.com/users/hishelloworld/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/hishelloworld/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/hishelloworld/subscriptions",
            "organizations_url": "https://api.github.com/users/hishelloworld/orgs",
            "repos_url": "https://api.github.com/users/hishelloworld/repos",
            "events_url": "https://api.github.com/users/hishelloworld/events{/privacy}",
            "received_events_url": "https://api.github.com/users/hishelloworld/received_events",
            "type": "User"
} 

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/login', (req, res) =>  {
    res.send("Please LOgin");
});

app.get('/chai', (req, res) => {
    res.send("JOydeb Roy");
})

app.get('/github', (req, res) => {
    res.json({})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})