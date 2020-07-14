import React from 'react'
import {connect} from 'react-redux'
import {buyIceCream} from '../redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Numero de helados - {props.numOfIceCream} </h2>
            <button onClick={props.buyIceCream}>comprar helado</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

const mapDispatchProps = dispatch =>{
    return {
        buyIceCream: () =>{ dispatch(buyIceCream())}
    }
}
export default connect(mapStateToProps,mapDispatchProps)(IceCreamContainer)
