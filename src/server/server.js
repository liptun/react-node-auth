const path = require('path')
const express = require('express')
const app = express()
const publicPath = path.join(__dirname, '..', '..', 'dist')
const port = process.env.PORT || 80

app.use(express.static(publicPath))

app.get('/test', (req, res) => {
    res.send({
        foo: 'bar',
        x: 'd',
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => {
    console.log(`Server is up on port: ${port}`)
})
