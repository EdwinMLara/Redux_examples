const redux = require('../../node_modules/redux')
const reduxLogger = require('../../node_modules/redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddelware = redux.applyMiddleware 
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream(){
    return {
        type: BUY_ICECREAM
    }
}

/*const incialState = {
    numOfcakes: 10,
    numOfIceCream: 20
}*/

const inicialStateCake = {
    numOfcakes: 10
}

const incialIceCreamState = {
    numOfIceCream: 20
}

/*const reducer = (state = incialState, action) =>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state, numOfcakes: state.numOfcakes - 1
        }
        case BUY_ICECREAM: return{
            ...state, numOfIceCream: state.numOfIceCream - 1
        }
        default: return state
    }
}*/

const cakeReducer = (state = inicialStateCake, action) =>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state, numOfcakes: state.numOfcakes - 1
        }
        
        default: return state
    }
}

const iceCreamReducer = (state = incialIceCreamState, action) =>{
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state, numOfIceCream: state.numOfIceCream - 1
        }
        
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer,applyMiddelware(logger));
console.log('Inicial state',store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()