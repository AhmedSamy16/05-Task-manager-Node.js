import CustomError from "../Utils/CustomError.js"

const globalErrorHandler = (error, req, res, next) => {
    if (error instanceof CustomError) {
        return res.status(error.statusCode).json({
            message: error.message
        })
    }
    res.status(500).json({
        message: 'error'
    })
}

export default globalErrorHandler