var express = require('express')
var cors = require('cors')
var app = express()
const redis = require("redis");
const client = redis.createClient();
const { promisify } = require("util");


 const getAsync = promisify(client.get).bind(client);
app.use(cors())

app.get('/jobs', async (req, res, next)=> {
    const jobs=await getAsync('github')
    const parseJob=JSON.parse(jobs)
    // console.log(parseJob.length)
  res.json(parseJob)
})

app.listen(3001, function () {
  console.log('CORS-enabled web server listening on port 3001')
}) 