import { createAction, props } from "@ngrx/store";
import { ITodo } from "../models/todo.model";

// createAction takes at least one argument
// first argument is type an action and should be unique
//by untilizing props we can pass data, then we need to update our reducer when action is dispatched from component
export const addTodoItem = createAction(
    '[Todo] Add Todo', 
    props<{todoItem:ITodo}>()
);

// export const deleteTodoItem = createAction(
//     '[Todo] Delete Todo',
//     props<{todoItem:ITodo}>()
// )