import React, { Component } from 'react'
import 'semantic-ui-react'
import { Button, Icon} from 'semantic-ui-react'
import DetailsModal from './Modal.js'

class List extends Component {
    state = {
      showModal: 0
    };
  
    getModal = value => {
      this.setState({ showModal: value });
    };
  
    hideModal = value => {
      this.setState({ showModal: 0 });
    };
  
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
                        <p>Price: &nbsp;&nbsp;&nbsp;&nbsp;{data.price}&nbsp;&nbsp;&nbsp;Baht</p>
                    </div>
                    <div className="extra">
                        <Button className="ui right floated primary button" 
                            style={btn} 
                            onClick={() => this.getModal(data.id)}>
                            <Icon className='cart' style={icon}/>
                            Buy tickets
                        </Button>
                        
                        <DetailsModal
                            show={this.state.showModal === data.id}
                            onHide={() => this.hideModal(data.id)}
                            name={data.name} image={data.image}
                            tagline={data.tagline}
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
    marginTop: '3em'
}
const icon = {
    marginRight: '2vmin'
}

export default List;