import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Storage } from '@ionic/storage-angular';

import { AppConstants } from 'src/app/app.constants';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private storageInitialized = false;

  constructor(private _storage: Storage) { }

  async getTodos(): Promise<Todo[]> {
    if (!this.storageInitialized) await this._storage.create();

    return (await this._storage.get(AppConstants.localDbName)) || [];
  }

  async saveTodos(todos: Todo[]) {
    if (!this.storageInitialized) await this._storage.create();

    return this._storage.set(AppConstants.localDbName, todos);
  }

  // async loadTodos() {
  //   const todos: Todo[] = localStorage.getItem(AppConstants.localDbName) == null ? [] : JSON.parse(localStorage.getItem(AppConstants.localDbName)!);
    
  //   this._todos$.next(todos);
  // }

  // async saveTodos() {
  //   return localStorage?.setItem(AppConstants.localDbName, JSON.stringify(this._todos$.value));
  // }

  // getTodos(): Observable<Todo[]> {
  //   if (!this._loaded) {
  //     this.loadTodos();
  //     this._loaded = true;
  //   }

  //   return this._todos$;
  // }

  // addTodo(content: string) {
  //   this._todos$.next([
  //     ...this._todos$.value,
  //     { id: Date.now().toString(), content: content },
  //   ]);

  //   this.saveTodos();
  // }

  // removeTodo(id?: string) {
  //   this._todos$.next(this._todos$.value.filter((item: Todo) => item.id != id));

  //   this.saveTodos();
  // }
}
