import React from 'react'
import {buyCake} from '../redux'

function CakeContainer() {
    return (
        <div>
            <h2>Numero de pasteles</h2>
            <button>Comprar Pastel</button>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch =>{ 
    return {
        buyCake: () => {dispatch(buyCake())}
    }
}
export default CakeContainer
