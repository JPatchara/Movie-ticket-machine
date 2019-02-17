import React, { Component } from "react";
import 'semantic-ui-react'
import { Icon, Header} from 'semantic-ui-react'
class DetailsModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            totalPrice: 0,
            checkOut: false
        }
        this.doDecrement = this.doDecrement.bind(this)
        this.doIncrement = this.doIncrement.bind(this)
        this.goCheckOut = this.goCheckOut.bind(this)
    }

    doDecrement() {
        if(this.state.value > 0) {
            this.setState({ value: this.state.value - 1 })
            this.setState({ totalPrice: (this.state.value-1)*this.props.price })
        }
    }
    doIncrement() {
        if(this.state.value < 60) {
            this.setState({ value: this.state.value + 1 })
            this.setState({totalPrice: (this.state.value+1)*this.props.price});
        }
    }

    goCheckOut = () => {
        this.setState({ checkOut: true });
    }
    cancelCheckout = () => {
        this.setState({ checkOut: false });
    }

    render() {

        return (
            <React.Fragment>
                {this.props.show && (
                <div className='bg' style={divBG}>
                    <div className="modal" style={divModal}><hr/>
                        <div className="content" style={content}>
                            <div className="image" style={divImg}>
                                <img style={imgStyle} src={this.props.image}/>
                            </div>
                            <Header style={NameHeader}>{this.props.name}</Header>
                            <p style={Tagline}>{this.props.tagline}</p>
                            <p style={Price}>Price:&nbsp;&nbsp;&nbsp;{this.props.price}&nbsp;&nbsp;&nbsp;Baht</p>
                            <div className="NumTicket" style={NumTicket}>
                                <h4 style={numText}>Number of ticket :</h4>
                                <div className="numInput" style={numInput}>
                                    <button style={minusBtn} onClick={this.doDecrement} className="fa fa-minus fa-inverse fa-2x">
                                        <Icon className='minus'/>
                                    </button>
                                    <input style={num} type="text" className="number" value={this.state.value}></input>
                                    <button style={plusBtn} onClick={this.doIncrement} className="fa fa-plus fa-inverse fa-2x">
                                        <Icon className='plus'/>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <p style={Total}>Total price:&nbsp;&nbsp;&nbsp;
                                {this.state.totalPrice}&nbsp;&nbsp;&nbsp;
                                </p>
                            </div>
                        </div><hr/>
                        <button className="ui blue button" style={okBTN} onClick={this.goCheckOut}> 
                            <Icon className='money bill alternate' style={tagIcon}/>
                            Checkout
                        </button>
                        <button class="ui red button" style={cancelBTN} 
                            onClick={this.props.onHide}>Cancel
                        </button>

                        <PaymentModal show={this.state.checkOut}
                            onClose={() => this.cancelCheckout()} 
                            name={this.props.name} total={this.state.totalPrice}
                        >
                        </PaymentModal>
                    </div>
                </div>
                )}
            </React.Fragment>
      );
    }
}

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
                <div className='bg' style={paymentBG}>
                    <div className="modal" style={paymentModal}>
                        <div className="content" style={paymentContent}>
                            <div className="conclusion">
                                <p style={ccsName}>You are buying ticket for " {this.props.name} ".</p>
                                <p style={ccsPrice}>
                                    <Icon className='payment'/>&nbsp;
                                    Total price is &nbsp;&nbsp;&nbsp;
                                    {this.props.total}&nbsp;&nbsp;&nbsp; Baht.
                                </p>
                                <div style={paymentInputBG}>
                                    <p style={paymentInputText}>Please tab your payment here:</p>
                                    <input style={paymentInput} type="number" min="0"></input>
                                </div>
                            </div>
                        </div>
                    <button className="ui blue button" style={submitBTN}> 
                        <Icon className='money bill alternate'/>
                        Submit
                    </button>
                    <button class="ui red button" style={backBTN} 
                        onClick={this.props.onClose}> Back
                    </button>
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
const imgStyle = {
    position: 'relative',
    width: '27.5vmin',
    height: '38vmin',
    right: '4.2vmin',
    top: '1.4vmin',
    marginBottom: '-8vmin',
    marginTop: '2vmin',
    boxShadow: '1vmin 1vmin'
}
const okBTN = {
    float: 'right',
    marginTop: '1vmin'
}
const cancelBTN = {
    float: 'left',
    width: '18vmin',
    marginTop: '1vmin'
}
const divImg = {
    float: 'top', 
    bottom: '5vmin'
}
const tagIcon = {
    marginRight: '2vmin'
}
const NameHeader = {
    position: 'relative',
    left: '32vmin',
    bottom: '34vmin',
    fontSize: '3.2vmin'
}
const Tagline = {
    position: 'relative',
    bottom: '36vmin',
    marginLeft: '32vmin'
}
const Price = {
    position: 'relative',
    color: 'black',
    width: '19vmin',
    fontSize: '2.2vmin',
    bottom: '35vmin',
    marginLeft: '32vmin',
    padding: '0.8vmin',
    background: 'rgba(102,204,255,0.6)',
    borderRadius: '1vmin'
}
const Total = {
    position: 'relative',
    color: 'black',
    fontSize: '2.2vmin',
    width: '36.6vmin',
    bottom: '14vmin',
    marginLeft: '46vmin',
    marginBottom: '-10vmin',
    padding: '2vmin',
    background: 'rgba(102,204,255,0.6)',
    borderRadius: '0vmin 0vmin 0vmin 4vmin'
}
const NumTicket = {
    position: 'relative',
    marginLeft: '32vmin',
    marginRight: '18vmin',
    marginBottom: '-20vmin',
    width: '50.6vmin',
    overflow: 'hidden',
    height: '20vmin',
    bottom: '34vmin',
    background: 'rgba(18, 19, 19, 0.582)',
    borderRadius: '1vmin 0vmin 0vmin 6vmin'
}
const numInput = {
    position: 'relative',
    left: '12vmin',
    bottom: '1vmin'
}
const numText = {
    position: 'relative',
    color: 'white',
    padding: '2vmin'
}
const num = {
    textAlign: 'center',
    fontSize: '2.2vmin',
    width: '8vmin',
    height: '6vmin'
}
const plusBtn = {
    width: '5.5vmin',
    height: '6vmin',
    background: 'rgba(255,255,102,0.6)',
    borderRadius: '0.2vmin 2vmin 2vmin 0.2vmin'
}
const minusBtn ={
    width: '5.5vmin',
    height: '6vmin',
    background: 'rgba(255,255,102,0.6)',
    borderRadius: '2vmin 0.2vmin 0.2vmin 2vmin'
}

const paymentBG = {
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
    background: 'rgba(0,51,51,1)'
}
const paymentModal = {
    zIndex: '3',
    borderRadius: '1vmin 6vmin 1vmin 6vmin',
    maxWidth: '195vmin',
    maxHeight: '200vmin',
    padding: '2.5vmin',
    boxShadow: '0 10px 30px 0 rgba(127, 127, 127, 0.3)',
    background: 'rgb(255, 255, 255)'
}
const paymentContent = {
    display: 'inline'
}
const ccsName = {
    color: 'black',
    fontSize: '4vmin'
}
const ccsPrice = {
    color: 'black',
    fontSize: '2.5vmin'
}
const submitBTN = {
    float: 'right',
    marginTop: '7vmin'
}
const backBTN = {
    float: 'left',
    width: '18vmin',
    marginTop: '7vmin',
    borderRadius: '0.7vmin 0.7vmin 0.7vmin 3vmin'
}
const paymentInputBG = {
    position: 'relative',
    marginLeft: '20vmin',
    marginRight: '18vmin',
    marginTop: '3vmin',
    width: '45vmin',
    overflow: 'hidden',
    height: '20vmin',
    top: '2vmin',
    background: 'rgba(0,153,255,0.7)',
    borderRadius: '1vmin 6vmin 1vmin 6vmin'
}
const paymentInputText = {
    color: 'black',
    padding: '2vmin'
}
const paymentInput = {
    padding: '2vmin',
    marginLeft: '8vmin',
    borderRadius: '2vmin 0.2vmin 0.2vmin 2vmin'
}

export default DetailsModal
