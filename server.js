import dotenv from "dotenv"
dotenv.config()

import app from "./app.js"
import mongoose from "mongoose"

const PORT = process.env.PORT

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Database connection successfully...')
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}...`)
        })
    })
    .catch(err => {
        console.log(err)
    })