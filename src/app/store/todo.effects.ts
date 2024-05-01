import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { loadTodosSuccess, loadTodos, loadTodo, loadTodoSuccess } from "./todo.action";

@Injectable()
export class TodosEffects {
    constructor(private actions$: Actions, private http: HttpClient){}

    loadData$ = createEffect(() => 
        this.actions$.pipe(
            ofType(loadTodos),
            switchMap(() =>
                this.http.get('https://dummyjson.com/todos').pipe(
                    map((data: any) => {
                        console.log(data)
                        return loadTodosSuccess({todos: data.todos})
                    })
                    //catchError(error => of(loadTodoFailure({data: error})))
                )
            )
        )

    );
}

@Injectable()
export class TodoEffects {
    constructor(private actions$: Actions, private http: HttpClient){}
    loadTodoData$ = createEffect(() => 
        this.actions$.pipe(
            ofType(loadTodo),
            switchMap((action: any) =>
                this.http.get(`https://dummyjson.com/todo/${action.id}`).pipe(
                    map((data: any) => {
                        console.log(data)
                        return loadTodoSuccess({todo: data})
                    })
                    //catchError(error => of(loadTodoFailure({data: error})))
                )
            )
        )

    );
}