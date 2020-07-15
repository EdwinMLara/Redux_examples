import{
    FETCH_USERS_REQUETS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE} from './userTypes'
    
import axios from 'axios'

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUETS
    }
}

export const fecthUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () =>{
    return (dispatch) => {
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