import express from "express"
import tasks from "./routes/tasks.js"
import globalErrorHandler from "./controllers/errorController.js"

const app = express()

app.use(express.json())

app.use('/api/v1/tasks', tasks)

app.all('*', (req, res) => {
    res.status(404).json({
        status: "failed",
        message: `Couldn't find ${req.originalUrl}`
    })
})

app.use(globalErrorHandler)

export default app