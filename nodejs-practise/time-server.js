const net = require('net')

function zeroFill(num) {
    return (num < 10 ? '0' : '') + num
}

function formatDate(date) {
    return date.getFullYear() + '-' +
           zeroFill(date.getMonth() + 1) + '-' +
           zeroFill(date.getDate()) + ' ' +
           zeroFill(date.getHours()) + ':' +
           zeroFill(date.getMinutes())
}

const server = net.createServer(function(socket) {
    const now = new Date()
    socket.end(formatDate(now) + '\n')
})

server.listen(Number(process.argv[2]))

