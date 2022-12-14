import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/shared/models/todo.model';

export const addTodo = createAction(
  '[Todo Component] Add Todo',
  props<{ content: string }>()
);

export const removeTodo = createAction(
  '[Todo Component] Remove Todo',
  props<{ id: string }>()
);

export const loadTodos = createAction('[Todo Component] Load Todos');

export const loadTodosSuccess = createAction(
  '[Todo API] Todo Load Success',
  props<{ todos: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[Todo API] Todo Load Failure',
  props<{ error: string }>()
);
