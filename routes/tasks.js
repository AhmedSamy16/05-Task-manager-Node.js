import express from "express"
import { getAllTasks, createTask, getTaskById, updateTask, deleteTask } from "../controllers/tasksControllers.js"

const router = express.Router()

router.route('/')
    .get(getAllTasks)
    .post(createTask)

router.route('/:id')
    .get(getTaskById)
    .patch(updateTask)
    .delete(deleteTask)

export default router