import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodo, ITodos } from '../../models/todo.model';
import { Observable } from 'rxjs';
import { todosSelector } from '../../store/todo.selector';
import { addTodoItem, loadTodos } from '../../store/todo.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  // todos$: ITodo[] = []; //if we want to subscribe the observable 
  todos$: Observable<ITodo[]>// In case if we don't want  subscribe the observable

  //should provide which reducer we need 
  constructor(private store: Store<{myTodos: ITodos}>, private router: Router){
    // // this.store.select(todosSelector).subscribe((res:ITodo[]) => {
    // //   this.todos$ = res
    // // });

    // //select method enables data from store and returns an observable
    this.todos$ = this.store.select(todosSelector);
  }

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
  }

  addNewTodo(){
    const newTodoItem: ITodo = {
      id: 2,
      todo: 'Kumudu',
      completed: false
    }
    //dispatching action
    this.store.dispatch(addTodoItem({ todoItem:newTodoItem }));
    console.log('adding todo');
  }

  onGotoTodo(value: number){
    console.log(value);
    this.router.navigate(['/todos', value]);
  }

  
}
