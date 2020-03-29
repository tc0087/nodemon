var http = require('http')

const server = http.createServer((req, res) => {
	res.write("word")
	res.end()
})

server.listen(3000)