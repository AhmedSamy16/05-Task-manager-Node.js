import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Task is required!'],
        unique: [true, 'Task already exists'],
        trim: true,
        minLength: [5, 'Min Length is 5 charachters long'],
        maxLength: [50, 'Max Length is 20 charachters long']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const Task = mongoose.model('Task', taskSchema)

export default Task