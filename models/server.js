const express = require('express');
require('dotenv').config()
const dbConnection = require('../database/config')
const {getExport, postExport, putExport, deleteExport} = require('../controllers/exportController')

class Server{
    constructor(){
        this.app = express()
        this.listen()
        this.dbConnection()
        this.pathExport = '/api/export'
        this.routes()
    }
    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`)
        })
    }
    
    routes(){
        this.app.use(express.json())
        this.app.get(this.pathExport, getExport)
        this.app.post(this.pathExport, postExport)
        this.app.put(this.pathExport+'/:id', putExport)
        this.app.delete(this.pathExport+'/:id', deleteExport)
    }

    async dbConnection(){
        await dbConnection()
    }
}

module.exports = Server;