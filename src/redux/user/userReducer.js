import{
    FETCH_USERS_REQUETS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE} from './userTypes'

const inicialState = {
    loading: true,
    users: [],
    error: ''
}

const userReducer = (state = inicialState, action) =>{
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
        default: 
            return state
    }

}

export default userReducer;