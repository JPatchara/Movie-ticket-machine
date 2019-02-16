import App from "../components/App"
import Head from 'next/head'
import React from 'react'
import { Dropdown, Divider } from 'semantic-ui-react'
import 'semantic-ui-react'
import fireST from '../configs/firestore'
import List from '../components/MoviesList'

// Main page render
class Mainpage extends React.Component {

    constructor(props) {
        super(props)
        this.ref = fireST.firestore().collection('MoviesDetails');
        this.unsubscribe = null;
        this.state = {
            MoviesName: [],
            showModal: 0,
            list_count: 0,
            value_sortby: '',
            value_name: ''
        }
    }

    onChangeSortby = (e, { value }) => {
        this.setState({ value: value })
        var selection_sortby = value

        if (selection_sortby == 'Price(Lower)') {
            this.unsubscribe = this.ref.orderBy('Price', 'asc').onSnapshot(this.onCollectionUpdate);
        } else if (selection_sortby == 'Price(Higher)') {
            this.unsubscribe = this.ref.orderBy('Price', 'desc').onSnapshot(this.onCollectionUpdate);
        } else if (selection_sortby == 'Date & Time(Older)') {
            this.unsubscribe = this.ref.orderBy('Date', 'desc').onSnapshot(this.onCollectionUpdate);
        } else if (selection_sortby == 'Date & Time(Newer)') {
            this.unsubscribe = this.ref.orderBy('Date', 'asc').onSnapshot(this.onCollectionUpdate);
        } else if (selection_sortby == 'none') {
            this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
        } else { this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate); }
    }

    onChangeName = (e, { value }) => {
        this.setState({ value: value })
        var selection_name = value

        this.unsubscribe = this.ref.where("Name", "==", selection_name).onSnapshot(this.onCollectionUpdate);
    }

    onCollectionUpdate = (querySnapshot) => {
        const MoviesName = []
        var list_count = 1

        querySnapshot.forEach((doc) => {
            const Data = doc.data()
            MoviesName.push({
                id: list_count,
                name: Data.Name,
                price: Data.Price,
                tagline: Data.Tagline,
                image: Data.Image
            });
            list_count = list_count+1
        });
        this.setState({ MoviesName })
        this.setState({ list_count })
    }
    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
    }


    render() {
        const { value } = this.state
        // const { value_name } = this.state
        return (
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
                    <Dropdown id="dropdownSort" placeholder='Sort by' fluid selection 
                     options={sortOptions} value={value} onChange={this.onChangeSortby}/>
                    <Dropdown id="dropdownSearch" placeholder='Search and select your movie' fluid search selection 
                    options={moviesSearch} value={value} onChange={this.onChangeName} />
                    <Divider id="divider" vertical></Divider>
                </div>
                <div id="moviesList">
                    <div id="listContainer">
                        {/* <MoviesContainer/> */
                        <List data={this.state.MoviesName}/>}
                    </div>
                </div>
                <script></script>
            </App>
        );
    }
}

var moviesSearch = []
const db = fireST.firestore()
const moviesRef = db.collection("MoviesDetails")

moviesRef.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        moviesSearch.push({text:doc.data().Name, value:doc.data().Name})
    })
})

const sortOptions = [{
    text: 'Date & Time(Older)',
    value: 'Date & Time(Older)'
},{
    text: 'Date & Time(Newer)',
    value: 'Date & Time(Newer)'
},{
    text: 'Price(Lower)',
    value: 'Price(Lower)'
},{
    text: 'Price(Higher)',
    value: 'Price(Higher)'
},{
    text: 'none',
    value: 'none'
}]

export default Mainpage
