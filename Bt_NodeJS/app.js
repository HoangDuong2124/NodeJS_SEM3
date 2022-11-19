const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()

app.engine('handlebars', expressHandlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', ' handlebars')
app.use(express.static(__dirname + '/public'))
    // app.use(express.static( '/public'))
app.get('/', (req, res) => {
    res.render('home')
})
app.get('/register', (req, res) => {
    res.render('register')
})
app.use((req, res) => {
    res.status(404)
    res.render('404')
})
const port = process.env.port || 3000
app.listen(port, () => console.log(`\nnavigate to http://localhost:${port} \n`))