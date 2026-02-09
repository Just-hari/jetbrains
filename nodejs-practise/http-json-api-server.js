const http = require('http')
const url = require('url')

const port = Number(process.argv[2])

const server = http.createServer(function(req, res) {
    const parsedUrl = url.parse(req.url, true)
    const pathname = parsedUrl.pathname
    const isoTime = parsedUrl.query.iso
    
    if (!isoTime) {
        res.writeHead(404)
        return res.end()
    }
    
    const date = new Date(isoTime)
    let result
    
    if (pathname === '/api/parsetime') {
        result = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }
    } else if (pathname === '/api/unixtime') {
        result = {
            unixtime: date.getTime()
        }
    } else {
        res.writeHead(404)
        return res.end()
    }
    
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
})

server.listen(port)
