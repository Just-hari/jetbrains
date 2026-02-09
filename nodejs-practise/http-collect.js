const http = require('http')

const url = process.argv[2]

http.get(url, function(response) {
    let data = ''
    
    response.setEncoding('utf8')
    response.on('data', function(chunk) {
        data += chunk
    })
    response.on('end', function() {
        console.log(data.length)
        console.log(data)
    })
    response.on('error', function(err) {
        console.error(err)
    })
}).on('error', function(err) {
    console.error(err)
})
