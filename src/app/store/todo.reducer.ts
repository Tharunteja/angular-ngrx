import { createReducer, on } from "@ngrx/store";
import { ITodo, ITodos } from "../models/todo.model";
import { addTodoItem, loadTodos, loadTodosSuccess, loadTodo, loadTodoSuccess } from "./todo.action";

const initialState: ITodos = {
    todos: [{
        id: 1,
        todo: 'call ADT',
        completed: true
    }],
    isLoading: false,
    todo: {
        id: 1,
        todo: 'call RRR',
        completed: true
    }
};
//createReducer take at least take on argument and multiple on. 
//After creating it we should add it to the store module or provideStore in standalone with a name. 
//By using that name we can access to our reducer
export const getTodosReducer = createReducer( 
    initialState, 
    //utilizing on function, first argument expects the action
    //second argument is a function which will return the updated state when action is dispatched
    on(addTodoItem, (state, action) => {
        //if there is any logic
        return {
            ...state,
        }
    }),
    on(loadTodos, (state, action) => {
        return {
            ...state,
        }
    }),
    on(loadTodosSuccess, (state, action: any) => {
        console.log('todos from reducer',action.todos);
        return {
          ...state,
          todos: [...state.todos, ...action.todos]
        };
      }),

      on(loadTodo, (state, action) => {
        return {
            ...state,
        }
    }),
    on(loadTodoSuccess, (state, action: any) => {
        console.log('todo from reducer',action.todo);
        return {
          ...state,
          todo: {...action.todo}
        };
      }),
    // on(deleteTodoItem, (state, action) => {
    //     return {
    //         ...state,
    //         todos: [...state.todos, action.todoItem]
    //     }
    // }),
);

export const getTodoReducer = createReducer( 
    initialState, 
    //utilizing on function, first argument expects the action
    //second argument is a function which will return the updated state when action is dispatched
    on(loadTodo, (state, action) => {
        return {
            ...state,
        }
    }),
    on(loadTodoSuccess, (state, action: any) => {
        console.log('todo from reducer',action);
        return {
          ...state,
          todo: {...action.todo}
        };
      }),
);