import { createAction, props } from "@ngrx/store";
import { ITodo, ITodos } from "../models/todo.model";

// createAction takes at least one argument
// first argument is type an action and should be unique
//by untilizing props we can pass data, then we need to update our reducer when action is dispatched from component
export const addTodoItem = createAction(
    '[Todo] Add Todo', 
    props<{todoItem:ITodo}>()
);

export const loadTodos = createAction(
    '[Todo] Load Todos',
);

export const loadTodosSuccess = createAction(
    '[Todo] Load Todos Success',
    props<{todos: ITodos}>()
);

export const loadTodo = createAction(
    '[Todo] Load Todo',
    props<{id: number}>()
);

export const loadTodoSuccess = createAction(
    '[Todo] Load Todo Success',
    props<{todo: ITodo}>()
);


// export const deleteTodoItem = createAction(
//     '[Todo] Delete Todo',
//     props<{todoItem:ITodo}>()
// )