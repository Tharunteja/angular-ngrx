import { Component } from '@angular/core';
import { loadTodo } from '../../../store/todo.action';
import { Store } from '@ngrx/store';
import { ITodo } from '../../../models/todo.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { todoSelector } from '../../../store/todo.selector';

@Component({
  selector: 'app-unique-todo',
  standalone: true,
  imports: [],
  templateUrl: './unique-todo.component.html',
  styleUrl: './unique-todo.component.css'
})
export class UniqueTodoComponent {
  todo$: any
  constructor(private store: Store<{myTodo: ITodo}>, private router: ActivatedRoute){
    this.store.select(todoSelector).subscribe((res) => {
      this.todo$ = res
    });

  }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];
    this.store.dispatch(loadTodo({id}));
  }
}
