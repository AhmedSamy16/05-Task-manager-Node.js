import Task from "../models/tasksModel.js"
import asyncErrorHandler from "../middleware/asyncErrorHandler.js"
import CustomError from "../Utils/CustomError.js"

export const getAllTasks = asyncErrorHandler(async (req, res, next) => {
    const tasks = await Task.find({})
    res.status(200).json({
        status: 'success',
        count: tasks.length,
        data: { tasks }
    })
})

export const createTask = asyncErrorHandler(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({
        status: 'success',
        data: { task }
    })
})

export const getTaskById = asyncErrorHandler(async (req, res, next) => {
    const task = await Task.findById(req.params.id)
    if (!task) {
        const err = new CustomError('Task doesn\'t exist', 404)
        return next(err)
    }
    res.status(200).json({
        status: "success",
        data: { task }
    })
})

export const updateTask = asyncErrorHandler(async (req, res) => {
    const id = req.params.id
    const task = await Task.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    if (!task) {
        const err = new CustomError('Task doesn\'t exist', 404)
        return next(err)
    }
    res.status(200).json({
        status: "success",
        data: { task }
    })
})

export const deleteTask = asyncErrorHandler(async (req, res) => {
    const id = req.params.id
    const task = await Task.findByIdAndDelete(id)
    if (!task) {
        const err = new CustomError('Task doesn\'t exist', 404)
        return next(err)
    }
    res.status(204).json({
        status: 'success'
    })
})