import {combineReducers} from 'redux'
import cakeRedeucer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'

const rootReducer = combineReducers({
    cake: cakeRedeucer,
    iceCream: iceCreamReducer
})

export default rootReducer