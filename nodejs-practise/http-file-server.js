const http = require('http')
const fs = require('fs')

const port = Number(process.argv[2])
const filePath = process.argv[3]

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })
    
    const readStream = fs.createReadStream(filePath)
    readStream.pipe(res)
})

server.listen(port)
