import App from "../components/App"
import Head from 'next/head'
import React from 'react'
import { Dropdown, Divider } from 'semantic-ui-react'

const sortOptions = [
    {
        text: 'Date & Time',
        value: 'Date & Time'
    },
    {
        text: 'Price',
        value: 'Price'
    }
]
const moviesName = [{text:'Movie 1'}]
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
                {/* <img src="../static/images/Movies.jpg" /> */}
                <h3>MOVIES</h3>
            </div>
            <Dropdown id="dropdownSort" placeholder='Sort by' fluid selection options={sortOptions} />
           
            <Dropdown id="dropdownSearch" placeholder='Search and select your movie' fluid search selection options={moviesName} />
            <Divider id="divider" vertical></Divider>
        </div>
        <div id="moviesList">

        </div>
    </App>