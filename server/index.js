var express = require('express')
var cors = require('cors')
var app = express()
const redis = require("redis");
const client =redis.createClient({
  port      : process.env.port,           // replace with your port
  host      : process.env.host,        // replace with your hostanme or IP address
  password  : process.env.host,    // replace with your password
  
});
const { promisify } = require("util");
const port = process.env.port2||3001

 const getAsync = promisify(client.get).bind(client);
app.use(cors())

app.get('/jobs', async (req, res, next)=> {
  const jobs = await getAsync('github');
    const parseJob=JSON.parse(jobs)
    // console.log(parseJob.length)
  res.json(parseJob)
})

app.listen(port, function () {
  console.log('CORS-enabled web server listening on port 3001')
}) 
