import express from 'express'
import cors from 'cors'
import connectDb from './db.js'
import Todo from './models/todo.js'
import { connect } from 'mongoose'
import 'dotenv/config'

const app = express()
const port = process.env.PORT

app.use(cors()
)
app.get('/api/todos', async(req,res)=>{
try {
    const todos= await Todo.find({})
    res.json(todos)
} catch (error) {
    console.log(e)
    res.status(400).json(error)
}

})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
    connectDb()
})

