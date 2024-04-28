import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [{
    path: '', component: HomeComponent
}, {
    path: 'products', component: ProductsComponent
},{
    path: 'product/:id', component: ProductComponent
},{
    path: 'todos', component: TodoComponent
}];
