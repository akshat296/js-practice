// Akshat

var productReducer = (function () {
  var INITIAL_STATE = {
    products: ['Monitor']
  }
  return (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS':
        return {
          products: [...action.payload, ...INITIAL_STATE.products]
        }
        break
      case 'CLEAR_PRODUCTS':
        return {
          products: []
        }
        break
      default:
        return state
        break
    }
  }
})()


var todoReducer = (function () {
  var INITIAL_STATE = {
    todos: ['Shopping']
  }
  return (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'FETCH_TODOS':
        return {
          products: [...action.payload, ...INITIAL_STATE.todos]
        }
        break
      case 'CLEAR_TODOS':
        return {
          products: []
        }
        break
      default:
        return state
        break
    }
  }
})()

var reducers = {
  product: productReducer,
  todo: todoReducer
}

function createStore (reducers) {
  var INITIAL_STATE = {}
  Object.keys(reducers).forEach(reducer => {
    INITIAL_STATE[reducer] = reducers[reducer](undefined, { type: '' })
  })
  return {
    getState: function () {
      return INITIAL_STATE
    },
    dispatch: function (action) {
      Object.keys(reducers).forEach(reducer => {
        INITIAL_STATE[reducer] = reducers[reducer](
          INITIAL_STATE[reducer],
          action
        )
      })
    }
  }
}

var store = createStore(reducers)

let state = store.getState()
console.log(
  JSON.stringify(state) ===
    '{"product":{"products":["Monitor"]},"todo":{"todos":["Shopping"]}}'
)

store.dispatch({ type: 'FETCH_PRODUCTS', payload: ['Keyboard', 'Laptop'] })
state = store.getState()
console.log(
  JSON.stringify(state) ===
    '{"product":{"products":["Keyboard","Laptop","Monitor"]},"todo":{"todos":["Shopping"]}}'
)

store.dispatch({ type: 'CLEAR_PRODUCTS' })
state = store.getState()
console.log(
  JSON.stringify(state) ===
    '{"product":{"products":[]},"todo":{"todos":["Shopping"]}}'
)

store.dispatch({ type: 'FETCH_TODOS', payload: ['Keyboard', 'Laptop'] })
state = store.getState()
console.log(
  JSON.stringify(state) ===
    '{"product":{"products":[]},"todo":{"products":["Keyboard","Laptop","Shopping"]}}'
)

store.dispatch({ type: 'CLEAR_TODOS' })
state = store.getState()
console.log(
  JSON.stringify(state) === '{"product":{"products":[]},"todo":{"products":[]}}'
)
