import App from "../components/App"
import Head from 'next/head'
import React from 'react'
import { Dropdown, Divider, Modal, Button, Header, Icon, Image} from 'semantic-ui-react'
import 'semantic-ui-react'
import fireST from '../configs/firestore'
import { MoviesContainer } from '../components/ClassComponents'

// get data to put in dropdown menu
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

// Main page render
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
