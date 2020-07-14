import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {buyCake} from '../redux'

function HookCakeContainer() {
    const numOfCakes = useSelector(state => state.numOfCakes)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Numumero de pasteles - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>comprar pastel</button>
        </div>
    )
}

export default HookCakeContainer
