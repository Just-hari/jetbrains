const fs = require('fs')
const path = require('path')

const dirPath = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(dirPath, function(err, list) {
    if (err) throw err
    
    list.forEach(function(file) {
        if (path.extname(file) === ext) {
            console.log(file)
        }
    })
})
