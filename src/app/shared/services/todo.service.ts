import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AppConstants } from 'src/app/app.constants';
import { Todo } from 'src/app/shared/models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(): Observable<Todo[]> {
    return new Observable<Todo[]>((observer) => {
      const todos: Todo[] = localStorage.getItem(AppConstants.localDbName) == null ? [] : JSON.parse(localStorage.getItem(AppConstants.localDbName)!);
      observer.next(todos);
    });
  }

  async saveTodos(todos: Todo[]) {
    return localStorage?.setItem(AppConstants.localDbName, JSON.stringify(todos));
  }
}
