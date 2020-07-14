import {BUY_CAKE} from './cakeType'

const inicialState = {
    numOfCakes: 10
}

const cakeReducer = (state = inicialState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state, 
            numOfCakes: state.numOfCakes - action.payload
        }
        default: return state
    }
}

export default cakeReducer;