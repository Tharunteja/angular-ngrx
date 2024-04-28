import { ITodos } from "../models/todo.model";

//selector is a function which takes state as argument and return our state 
export const todoSelector = (state: {myTodos: ITodos}) => {
    console.log('my state')
    console.log(state)
   return state.myTodos.todos
};
