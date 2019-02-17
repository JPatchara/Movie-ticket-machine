import React, { Component } from "react";
import 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'

class PaymentModal extends Component {
    
    state = {
        total_price: 0
    };

    // getChanges = () => {

    // }

    render() {

        return (
            <React.Fragment>
                {this.props.show && (
                <div className='bg' style={divBG}>
                    <div className="modal" style={divModal}>
                        <div className="content" style={content}>
                            <div className="conclusion">
                                <p>You are buying ticket for "{this.props.name}".</p>
                                <p>Total price is {this.state.total_price}</p>
                                <div>
                                    <p>Please tab your payment here:</p>
                                    <input className="paid"></input>
                                </div>
                            </div>
                        </div>
                    <button className="ui blue button"> 
                        <Icon className='money bill alternate'/>
                        Submit
                    </button>
                    <button class="ui red button" style={cancelBTN} 
                    >Back</button>
                </div>
            </div>
            )}
            </React.Fragment>
        );
    }
}

const divBG = {
    position: 'fixed',
    zIndex: '2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    background: 'rgba(24, 23, 23, 0.8)'
}
const divModal = {
    zIndex: '3',
    borderRadius: '2vmin',
    width: '85vmin',
    maxHeight: '200vmin',
    padding: '2.5vmin',
    boxShadow: '0 10px 30px 0 rgba(127, 127, 127, 0.3)',
    background: 'rgb(255, 255, 255)'
}
const content = {
    display: 'inline'
}

export default PaymentModal