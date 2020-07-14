import React from 'react'
import {useSelector} from 'react-redux'

function HookCakeContainer() {
    const numOfCakes = useSelector(state => state.numOfCakes)
    return (
        <div>
            <h2>Numumero de pasteles - {numOfCakes}</h2>
            <button>comprar pastel</button>
        </div>
    )
}

export default HookCakeContainer
