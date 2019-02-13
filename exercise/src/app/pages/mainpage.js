import App from "../components/App"
import Head from 'next/head'
import React from 'react'
import { Dropdown, Divider } from 'semantic-ui-react'
import 'semantic-ui-react'
import fireST from '../configs/firestore'

const sortOptions = [{
        text: 'Date & Time',
        value: 'Date & Time'
    },{
        text: 'Price',
        value: 'Price'
    }]
var moviesSearch = new Array()
const db = fireST.firestore()
const moviesRef = db.collection("MoviesDetails")
moviesRef.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        moviesSearch.push({text:doc.data().Name, value:doc.data().Name}) // add data to array
    })
})

class MoviesContainer extends React.Component {
    constructor(props) {
        super(props)
        this.ref = fireST.firestore().collection('MoviesDetails');
        this.unsubscribe = null;
        this.state = {
            MoviesName: []
        }
    }
    onCollectionUpdate = (querySnapshot) => {
        const MoviesName = [];
        querySnapshot.forEach((doc) => {
            const Data = doc.data()
            MoviesName.push({
                name: Data.Name,
                price: Data.Price,
                tagline: Data.Tagline,
                image: Data.Image
            });
        });
        this.setState({ MoviesName });
    }
    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    render() {
        return (
            <div className="ui divided items" style={{flex: 1}}>
                {this.state.MoviesName.map(movie =>
                <div className="item" style={{backgroundColor:'rgba(117, 174, 187, 0.34)'}}>
                    <div className="image" style={{float: 'top', bottom: 3.2+'vmin'}}>
                        <img style={{position: 'relative', width: 15+'vmin', 
                         height: 21+'vmin', bottom: 3+'vmin'}} 
                         src={movie.image}
                        />
                    </div>
                    <div className="content">
                        <a className="header" style={{marginTop: 2+'vmin'}}>{movie.name}</a>
                        <div className="meta" style={{marginTop: 3+'vmin'}}>
                            <span className="cinema">{movie.tagline}</span>
                        </div>
                        <div className="description">
                        <p>Price: &nbsp;&nbsp;&nbsp;&nbsp;{movie.price}&nbsp;&nbsp;&nbsp;Baht</p>
                        </div>
                        <div className="extra">
                            <div className="ui right floated primary button" style={{marginRight: 1 +'em', marginTop: 3 +'em'}}>
                                Buy tickets
                                <i className="right chevron icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        );
    }
}

export default () =>
    <App>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
            <link rel="stylesheet" type="text/css" href="../static/styles/mainpage.css" />
        </Head>
        <div id="menuBar">
            <div id="textImg">
                <h3>MOVIES</h3>
            </div>
            <Dropdown id="dropdownSort" placeholder='Sort by' fluid selection options={sortOptions} />
            <Dropdown id="dropdownSearch" placeholder='Search and select your movie' fluid search selection options={moviesSearch} />
            <Divider id="divider" vertical></Divider>
        </div>
        <div id="moviesList">
            <div id="listContainer">
                <MoviesContainer/>
            </div>
        </div>
        <script></script>
    </App>
