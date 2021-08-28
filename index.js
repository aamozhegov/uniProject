const http = require('http')
const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

/*
const server = http.createServer((req, res) => {

	let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
	const ext = path.extname(filePath)
	let contentType = 'text/html'

	switch (ext) {
		case '.css':
			contentType = 'text/css'
			break
		case '.js':
			contentType = 'text/javascript'
			break
		default:
			contentType = 'text/html'
	}

	if (!ext) {
		filePath += '.html'
	}

		fs.readFile(filePath, (err, content) => {
			if (err) {
				fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
					if (err) {
						res.writeHead(500)
						res.end()
					} else {
						res.writeHead(200, {
							'Content-Type' : contentType
						})
						res.end(data)
					}
				})
		} else {
			res.writeHead(200, {
				'Content-Type' : 'text/html'
			})
			res.end(content)
		
		}
	})
})
*/
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log(`Server has been started on ${PORT}...`)
})