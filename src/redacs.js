export default function createStore(initialState) {
  let state = initialState;
  let listeners = [];

  function notifyListeners() {
    listeners.forEach(listener => listener() );
  }

  function dispatch(redac) {
    state = redac(state);
    notifyListeners();
  }

  function subscribe(listener) {
    listeners.push(listener);
  }

  function getState() {
    return state;
  }

  return {
    dispatch,
    subscribe,
    getState
  };
}
