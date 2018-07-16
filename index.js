const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

app.set('port', process.env.PORT || 3001)

mongoose.connect(config.db, (err, res) => {
    if(err) throw err
    console.log('conexion con la base de datos establecida...')

    app.listen(config.port, () => {
        console.log(`server corriendo en el puerto ${config.port}`)
    })
})