const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser')
const api = require('./api')


app.use(bodyParser.json())
app.use('/api', api)

// Hack to get privacy policy up asap
const path = require('path')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/privacy', function(req, res) {
  res.render('privacy')
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
