const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:9IRHY5ggmHoy5eRI@cluster0.kj7v8.mongodb.net/todo-database")

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = new Schema({
    email : {type: String, unique: true},
    name : String,
    password : String
})

const Todo = new Schema({
    title : String,
    done : Boolean,
    userId : ObjectId
})

const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todos', Todo);

module.exports = {
    UserModel,
    TodoModel
}






