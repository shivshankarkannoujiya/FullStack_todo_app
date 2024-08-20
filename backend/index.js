import express from 'express'
import cors from 'cors'
import { createTodo, updateTodo } from './types.js'
import { Todo } from './db.js'

const app = express()
app.use(express.json())
app.use(cors())

app.post('/todo', async (req,res) => {
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: `Sent wrong inputs`
        })
        return
    }
    
    await Todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: `Todo Created...`
    })
})



app.get('/todos', async (req,res) => {
    const todos = await Todo.find({})
    res.json({
        todos: todos
    })
})


app.put('/completed', async (req,res) => {
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if (!parsedPayload) {
        res.status(411).json({
            msg: `Sent wrong inputs`
        })
        return
    }

    //! Takes 2 Argumnets 
    // What to update (Kisko Update krna hai)
    // What value you want to give 
    await Todo.updateOne({
        _id: req.body.id
    },
    {
        completed: true
    }
)

    res.json({
        msg: `Todo marked as completed`
    })
})



const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is listening at:${port}`)
})