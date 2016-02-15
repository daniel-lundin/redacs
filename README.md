# Redacs

Experimental project to see what happens with redux if reducers and actions are combined into reducer actions.


## Why?
Redux is great for complex application. When writing simpler applications though, I've found that there is often a one-to-one relationship between actions and reducers. This is an experiment to see what happens if we combine them into reducer actions.


Also, the name is quite funny.

## Example

This is a simple reducer action that adds a todo:

```js
const initialState = {
  todos: []
};

const store = createStore(initialState);

function addTodo(id, description, completed) {
  return function(state) {
    return Object.assign({}, state, { todos: [...state.todos, { id, description, completed });
  }
}

store.dispatch(addTodo(1, 'a new todo', false));

```


The interface for the store is the same as for redux so it should work with redux-react for example.
