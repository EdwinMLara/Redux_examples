import {combineReducers} from 'redux'
import cakeRedeucer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
    cake: cakeRedeucer,
    iceCream: iceCreamReducer,
    user: userReducer    
})

export default rootReducer