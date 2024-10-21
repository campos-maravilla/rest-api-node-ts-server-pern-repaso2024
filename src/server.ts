
import express from "express";
import router from "./route";
import db from "./config/db";
import colors from 'colors'
import cors, { CorsOptions } from 'cors'

//para documentar la API

import swaggerUi from 'swagger-ui-express'
import swaggerSpec, { swaggerUiOptions } from './config/swagger'

//conectar db 
export async function connectDB() {
    try {
        await db.authenticate()
        db.sync()//para cuando vamos creando nuevos modelos,nuevas columnas
        //  console.log(colors.blue('Conexión exitosa a la BD'))
    } catch (error) {
        //console.log(error)
        console.log(colors.red.bold('Hubo un error al conectar a la BD'))
    }
}
connectDB()

const server = express()

// Permitir conexiones 
const corsOptions: CorsOptions = {
    origin: function (origin, callback) {
        //console.log(origin)
        if (origin === process.env.FRONTEND_URL) {
            optionsSuccessStatus: 200
            //  console.log('Permitir...')
            callback(null, true)
        } else {
            // console.log('Denegar...')
            callback(new Error('Error de CORS'))
        }
    }
}
server.use(cors(corsOptions))

// leer datos de formularios
server.use(express.json())

server.use('/api/products', router)

//DOCS
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions))


export default server

