const mymodule = require('./mymodule')

const dirPath = process.argv[2]
const ext = process.argv[3]

mymodule(dirPath, ext, function(err, list) {
    if (err) {
        return console.error('Error:', err)
    }
    
    list.forEach(function(file) {
        console.log(file)
    })
})
