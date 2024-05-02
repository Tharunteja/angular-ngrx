import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { getTodosReducer, getTodoReducer } from './store/todo.reducer';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { TodoEffects, TodosEffects } from './store/todo.effects';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideStore({myTodos: getTodosReducer, myTodo: getTodoReducer}), //myTodos is the reducer name and should include all the reducers here
    provideEffects([TodosEffects, TodoEffects]), //should created effects
    provideHttpClient(),
    importProvidersFrom(CommonModule, ReactiveFormsModule)]
};
