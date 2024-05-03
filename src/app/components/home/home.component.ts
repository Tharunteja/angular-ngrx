import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  todos:any[] = [];
  todoTitle: string = '';
  constructor(private productService: ProductsService){}

  ngOnInit(): void {
    this.productService.sharedValue.next('updating from home');
  }

  onAddTodo() {
    const todo = {
      id: this.todos.length + 1,
      title: this.todoTitle,
      completed: false
    }
    console.log(todo);

    this.todos = [...this.todos, todo];
    console.log(this.todos);
    this.todoTitle = '';
  }

  onTodoClick(id: number, checked: boolean){
    console.log(id, checked);
    console.log(this.todos);
  }
  
}
