const http = require('http')

const results = []
let count = 0

function fetchURL(index) {
    const url = process.argv[2 + index]
    
    http.get(url, function(response) {
        let data = ''
        
        response.setEncoding('utf8')
        response.on('data', function(chunk) {
            data += chunk
        })
        response.on('end', function() {
            results[index] = data
            count++
            
            if (count === 3) {
                results.forEach(function(result) {
                    console.log(result)
                })
            }
        })
        response.on('error', function(err) {
            console.error(err)
        })
    }).on('error', function(err) {
        console.error(err)
    })
}

for (let i = 0; i < 3; i++) {
    fetchURL(i)
}
