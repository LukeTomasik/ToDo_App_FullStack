
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const mongoose = require('mongoose')
const Task = require('./models/toDoModel')
const PORT = process.env.PORT || 3000


const dbUri = 'mongodb+srv://mastercontrol:control1234@cluster0.td0sd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(dbUri,{useNewUrlParser: true, useUnifiedTopology:true})
.then(() => {
    console.log(`Connected to Database`)
    app.listen(PORT,() => {console.log(`You are running on port ${PORT}`)})
})
.catch((err) => {
    console.log(`Here is the error: ${err}`)
})
app.get('/',(req,res)=> {
    res.send('Please send Help')

})

app.get('/create-task',(req,res) => {
    const newTask = new Task({
        taskTitle: 'Simple Task',
        taskBody: "Make this app appear!",
        completed: false,
        dueDate: new Date()

    })

    newTask.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(`Error being Thrown: ${err}`)
    })
})

app.get('/show-tasks', (req,res) => {
    Task.find()
    .then((response) => {
        console.log(response)
        res.json(response)
    })
    .catch((err) => {
        console.log(`Error being thrown: ${err}`)
    })
})

app.get('/show-tasks/:id',(req,res) => {
    const id = req.params.id
    Task.findById(id)
    .then((response) => {
        res.json(response)
        console.log(response.id)
        console.log(response.taskTitle)
        console.log(response.taskBody)
    })
    .catch((err) => {
        console.log(`ID error ${err}`)
    })
})




















