import React, { Component } from 'react'
import 'semantic-ui-react'
import { Button, Icon} from 'semantic-ui-react'
import DetailsModal from './DetailsModal.js'
import PaymentModal from './PaymentModal'

class List extends Component {
    state = {
      showModalDT: 0,
      showModalPM: 0
    }
  
    getModalDT = value => {
      this.setState({ showModalDT: value });
    }
    getModalPM = value => {
      this.setState({ showModalPM: value });
    }
  
    hideModalDT = value => {
      this.setState({ showModalDT: 0 });
    }
    hideModalPM = value => {
      this.setState({ showModalPM: 0 });
    }
  
    render() {
      return (
        <div className="ui divided items">
          {this.props.data.map((data, key) => (
            <div className="item" key={key} style={listBG}> 
                <div className="image" style={divImage}>
                    <img style={listImage} 
                    src={data.image}/>
                </div>
                <div className="content" >
                    <a className="header" style={{marginTop: 2+'vmin'}}>{data.name}</a>
                    <div className="meta" style={{marginTop: 3+'vmin'}}>
                        <span className="cinema">{data.tagline}</span>
                    </div>
                    <div className="description">
                        <p>Price:&nbsp;&nbsp;&nbsp;&nbsp;{data.price}&nbsp;&nbsp;&nbsp;Baht</p>
                        <p>Available on:&nbsp;&nbsp;{data.date}</p>
                    </div>
                    <div className="extra">
                        <Button className="ui right floated primary button" 
                            style={btn} onClick={() => this.getModalDT(data.id)}>
                            <Icon className='cart' style={icon}/>
                            Buy tickets
                        </Button>
                        
                        <DetailsModal
                            show={this.state.showModalDT === data.id}
                            onHide={() => this.hideModalDT(data.id)}
                            name={data.name} image={data.image}
                            tagline={data.tagline}
                            price={data.price}
                        />
                        <PaymentModal
                          show={this.state.showModalPM === data.id}
                          onHide={() => this.hideModalPM(data.id)}
                          name={data.name} price={data.price}
                        />
                    </div>
                </div>
            </div>
          ))}
        </div>
      );
    }
}

const listBG = {
    backgroundColor:'rgba(117, 174, 187, 0.34)',
    height:'32vmin'
}
const divImage = {
    float: 'top',
    bottom: '3vmin'
}
const listImage = {
    position: 'relative',
    width: '18.5vmin',
    height: '26vmin'
}
const btn = {
    marginRight: '1em',
    marginTop: '-1em'
}
const icon = {
    marginRight: '2vmin'
}

export default List;