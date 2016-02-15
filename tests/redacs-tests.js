import createStore from '../src/redacs.js';

describe('createStore', () => {
  it('should assign initial state', () => {
    const initialState = { someState: 'yep' };

    const store = createStore(initialState);

    expect(store.getState()).to.eql(initialState);
  });
});


// A reducer action
function addTodo(id, description, completed) {
  return function(state) {
    return Object.assign({}, state, {
      todos: state.todos.concat({
        id, description, completed
      })
    });
  }
}

describe('dispatch', () => {
  it('should update state', () => {
    const initialState = {
      todos: [{
        id: 1,
        description: 'a todo',
        completed: false
      }]
    };

    const store = createStore(initialState);
    const [ id, description, completed ] = [2, 'a new todo', false]
    store.dispatch(addTodo(id, description, completed));

    const todos = store.getState().todos;
    expect(todos).to.have.length(2);
    expect(todos[1]).to.have.property('id', id);
    expect(todos[1]).to.have.property('description', description);
    expect(todos[1]).to.have.property('completed', completed);
  });
});

function dummyReducerAction(param) {
  return function(state) {
    return Object.assign({}, state, { param });
  };
}

describe('subscribe', () => {
  it('should notify listeners after dispatching', (done) => {
    const store = createStore({});
    store.subscribe(done);

    store.dispatch(dummyReducerAction);
  });
});
