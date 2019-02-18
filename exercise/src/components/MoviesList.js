import React, { Component } from 'react'
import 'semantic-ui-react'
import { Button, Icon} from 'semantic-ui-react'
import DetailsModal from './ProcessModal.js'

class List extends Component {
    state = {
      showModal: 0
    }
  
    getModalDT = value => {
      this.setState({ showModal: value });
    }
  
    hideModalDT = value => {
      this.setState({ showModal: 0 });
    }
  
    render() {
      return (
        <div className="ui divided items">
          {this.props.data.map((data, key) => (
            <div className="item" key={key} style={listBG}> 
                <div className="image" style={divImage}>
                    <img style={listImage} src={data.image} alt=""/>
                </div>
                <div className="content" style={content}>
                    <p className="header" style={{marginTop: 2+'vmin'}}>{data.name}</p>
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
                            show={this.state.showModal === data.id}
                            onHide={() => this.hideModalDT(data.id)}
                            name={data.name} image={data.image}
                            tagline={data.tagline}
                            price={data.price}
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
  height:'32vmin',
  display: 'flex'
}
const divImage = {
  position: 'relative',
  float: 'top',
  bottom: '3vmin',
  display: 'flex',
  width: '18.5vmin',
  height: '26vmin'
}
const listImage = {
  position: 'relative',
  maxwidth: '18.5vmin',
  maxheight: '26vmin'
}
const btn = {
  marginRight: '1em',
  marginTop: '-0.5em'
}
const icon = {
  marginRight: '2vmin'
}
const content = {
  position: 'relative',
  marginLeft: '8vmin'
}

export default List;