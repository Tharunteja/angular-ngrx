import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/products/product/product.component';
import { TodoComponent } from './components/todo/todo.component';
import { ShareComponent } from './components/share/share.component';

export const routes: Routes = [{
    path: '', component: HomeComponent
}, {
    path: 'products', component: ProductsComponent
},{
    path: 'product/:id', component: ProductComponent
},{
    path: 'todos', component: TodoComponent
},{
    path: 'shared', component: ShareComponent
}];
