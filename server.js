const express = require('express')
const { join } = require('path')
const mysql = require('mysql2')
const app = express()

// not sure about db name, or if this is correct way to connect to db
// module.exports = mysql.createConnection('mysql://root:root@localhost:3306/moSQL_db')

// app.engine('.hbs', require('express-handlebars')({ extname: '.hbs' }))
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
// app.set('view engine', '.hbs')
app.use(express.json())

// // change ./routes name and ./connection later
app.use(require('./routes'))

app.get('/', (req, res) => {
    res.render('home')
})

require('./connection')
    .sync()
    .then(() => {
        const PORT = process.env.PORT || 3000
        app.listen(PORT, () => { console.log(`Server running on port ${PORT}...`) })
    })
    .catch(err => console.log(err))
    // define: {
    //     timestamps: false
    // }