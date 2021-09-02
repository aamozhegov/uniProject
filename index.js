const http = require('http')
const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log(`Server has been started on ${PORT}...`)
})