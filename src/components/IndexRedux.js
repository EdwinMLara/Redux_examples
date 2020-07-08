const redux = require('../../node_modules/redux')

const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE';

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

const incialState = {
    numOfcakes: 10
}

const reducer = (state = incialState, action) =>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state, numOfcakes: state.numOfcakes - 1
        }

        default: return state
    }
}

const store = createStore(reducer);
console.log('Inicial state',store.getState())
const unsubscribe = store.subscribe(() => console.log("Update state",store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())   
unsubscribe()