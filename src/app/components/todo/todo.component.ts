import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from 'src/app/shared/models/todo.model';
import { AppState } from 'src/app/state/app.state';
import { addTodo, loadTodos, removeTodo } from 'src/app/state/todos/todo.actions';
import { selectAllTodos } from 'src/app/state/todos/todo.selectors';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public allTodos$ = this._store.select(selectAllTodos);
  public todo = '';

  constructor(
    private _store: Store<AppState>, // Store,
  ) { }

  ngOnInit(): void {
    this._store.dispatch(loadTodos());
  }

  addTodo() {
    if (this.todo?.trim()) {
      this._store?.dispatch(addTodo({ content: this.todo }));
      this.todo = '';
    }
  }

  removeTodo(todo: Todo) {
    this._store?.dispatch(removeTodo({ id: todo.id ?? '' }));
  }
}
