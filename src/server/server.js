const path = require('path')
const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const app = express()
const publicPath = path.join(__dirname, '..', '..', 'dist')
const port = 80

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(publicPath))

app.get('/test', (req, res) => {
    res.send({
        message: 'API works',
    })
})

app.post('/api/users/login', (req, res) => {
    res.send({
        ...req.body,
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => {
    console.log(`Server is up on port: ${port}`)
})

// const myFunction = async () => {
//     const secret = 'thisismynewtoken'
//     const token = jwt.sign(
//         {
//             _id: '123',
//         },
//         secret,
//         {
//             expiresIn: '7 days',
//         }
//     )
//     console.log(token)
//     const verifed = jwt.verify(token, secret)
//     console.log(verifed)
// }

// myFunction()

// const myFunction = async () => {
//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password, 8)
//     console.log('password', password)
//     console.log('hashedPassword', hashedPassword)
//     const isMatch = await bcrypt.compare(password, hashedPassword)
//     console.log('isMatch', isMatch)
//     const isMatchWrong = await bcrypt.compare('123', hashedPassword)
//     console.log('isMatchWrong', isMatchWrong)
// }

// myFunction()
