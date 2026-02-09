const fs = require('fs')
const path = require('path')

module.exports = function(dirPath, ext, callback) {
    fs.readdir(dirPath, function(err, list) {
        if (err) {
            return callback(err)
        }
        
        const filteredList = list.filter(function(file) {
            return path.extname(file) === '.' + ext
        })
        
        callback(null, filteredList)
    })
}
