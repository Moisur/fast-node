const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
const port = process.env.PORT || 5000;
app.use(cors())
const user = [
    { id: 1, name: 'mosiur', email: 'mosiurislam4111@gamil.com', phone: 12324234 },
    { id: 2, name: 'Masud', email: 'Masudislam4111@gamil.com', phone: 1134 },
    { id: 3, name: 'Rokhon', email: 'Rokhonislam4111@gamil.com', phone: 123223234 },
    { id: 4, name: 'Hazrat', email: 'Hazratislam4111@gamil.com', phone: 123224 },
    { id: 5, name: 'Abubokor', email: 'Abubokorislam4111@gamil.com', phone: 123234 },
]
/* client sie data dite 2 ta kaj korete hy 
const cors = require('cors')
app.use(cors())
*/
app.get('/client', (req, res) => {
    res.send(user)
})

app.post('/post', (req, res) => {
    const users = (req.body)
    users.id=user.length+1
    user.unshift(users)
    res.send(users)
})










/* filter search query  */
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase()
        const result = user.filter(u => u.name.toLowerCase().includes(search))
        res.send(result)
    } else {
        res.send(user)
    }
})
/* find search params  */
app.get('/user/:id', (req, res) => {
    const id = req.params.id
    const use = user.find(idUse => idUse.id == id)
    res.send(use)
})
app.get('/', (req, res) => {
    res.send('this is a node')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
