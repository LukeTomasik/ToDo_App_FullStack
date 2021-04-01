const mongoose = require('mongoose')

const { Schema } = mongoose


const taskSchema = new Schema({
    taskTitle: {
        type: String,
        required:true
    },

    taskBody : {
        type: String,
        required:true
    },

    completed: {
        type: Boolean,
        default: false
    },

    dueDate: {
        type: Date,
        required: true,
        default: Date.now
    }


},


{timestamps:true})


const Task = mongoose.model('Task', taskSchema)
module.exports = Task
