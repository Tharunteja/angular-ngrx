import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { getTodosReducer } from './store/todo.reducer';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { TodosEffects } from './store/todo.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideStore({myTodos: getTodosReducer}), //myTodos is the reducer name and should include all the reducers here
    provideEffects([TodosEffects]), //should created effects
    provideHttpClient()]
};
