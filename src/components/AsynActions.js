const redux = require('../../node_modules/redux')
const thunkMiddelware = require('../../node_modules/redux-thunk').default
const axios = require('../../node_modules/axios')

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

const inicialState = {
    loading: true,
    users: [],
    error: ''
}

const FETCH_USERS_REQUETS = 'FETCH_USERS_REQUETS'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUETS
    }
}

const fecthUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state = inicialState, action) =>{
    switch(action.type){
        case FETCH_USERS_REQUETS:
            return{
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading: false,
                users: action.payload,
                error: ''
            } 
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
    }

}

const fetchUsers = () => {
     return function(dispatch){
         dispatch(fetchUsersRequest())
         axios.get('https://jsonplaceholder.typicode.com/users')
         .then(response => {
             const users = response.data
            dispatch(fecthUsersSuccess(users))
         })
         .catch(error => {
            dispatch(fetchUsersFailure(error.message))
         })
     }
}

const store = createStore(reducer,applyMiddleware(thunkMiddelware))
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers())