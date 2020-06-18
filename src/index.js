
//challenge crear un servidor en express que reciba el año 
// y determine si es bisiesto o no 


const {config} = require('../src/config/index')
const app = require('./server')

const main = async () => {
    await app.listen(config.port)
    console.log(`servidor en el puerto ${config.port}`)
}

main()