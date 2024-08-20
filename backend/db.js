import mongoose from "mongoose";


mongoose.connect(`mongodb+srv://abhi:Abhi123@backend-cohort.wxwmr.mongodb.net/Todo_app`)
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
},{timestamps:true})


const Todo = mongoose.model('Todo', todoSchema)

export {Todo}