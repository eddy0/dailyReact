const express = require('express')
const app = express()
const log = console.log.bind(console)
const path = require('path')
const bodyParser = require('body-parser')


const registerRouter = () => {
    let index = require('./routes/index')
    app.use('/', index)
}

const configApp = () => {

    app.use(bodyParser.urlencoded({
        extended: true,
    }))

    app.use(bodyParser.json())

    app.use('/dist', express.static(path.join(__dirname, 'dist')))
    registerRouter()
}


const run = (port, host) => {
    const server = app.listen(port, host, () => {
        const address = server.address()
        log(`listenning: http://${address.address}:${address.port} `)
    })

}


const __main = function() {
    configApp()
    let port = process.env.node || 5000
    let host = 'localhost'
    run(port, host)
}


if ( require.main === module ) {
    __main()
}