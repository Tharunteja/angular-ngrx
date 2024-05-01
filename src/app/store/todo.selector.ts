import { ITodo, ITodos } from "../models/todo.model";

//selector is a function which takes state as argument and return our state 
export const todosSelector = (state: {myTodos: ITodos}) => {
    console.log('my state')
    console.log(state)
   return state.myTodos.todos
};

export const todoSelector = (state: {myTodo: ITodo}) => {
    return state.myTodo.todo
}
