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
var moviesName = new Array()
const db = fireST.firestore()
const moviesRef = db.collection("MoviesDetails")

moviesRef.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        moviesSearch.push({text:doc.data().Name, value:doc.data().Name}) // add data to array
    })
})
moviesRef.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        moviesName.push(doc.data().Name) // add data to array
    })
})
// setTimeout(function() {
//     console.log(moviesName[3])
// }, 2000);
class Movies extends React.Component {   
    render() {
        return (
            <div> 
            { this.props.value }
            </div>
            // <div>
            //     <div>
            //         <div>
            //             <img src=""/>
            //         </div>
            //         <div>
            //             <a>{this.props.value}</a>
            //             <div>
            //                 <span>{this.props.value}</span>
            //             </div>
            //             <div>
            //                 <p>{this.props.value}</p>
            //             </div>
            //             <div>
            //                 <div>
            //                     Buy tickets
            //                     <i></i>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        );
    }
}
class MoviesContainer extends React.Component {   
    render() {
        var element_name = []
        element_name.push("DareDevil")
        // element_name.push(moviesName[1])
        console.log(moviesName)

        // var elements=[]
        for(var i=0;i<moviesName.length;i++){
                element_name.push(<Movies value={ moviesName } />)
            console.log(element_name)
        }
        console.log(element_name)
        return (
            // <div> 
            // {element_name}
            // </div>
            <div className="ui divided items">
                <div className="item">
                    <div className="image">
                        <img src=""/>
                    </div>
                    <div className="content">
                        <a className="header">{element_name}</a>
                        <div className="meta">
                            <span className="cinema">Tagline</span>
                        </div>
                        <div className="description">
                            <p></p>
                        </div>
                        <div className="extra">
                            <div className="ui right floated primary button" style={{marginRight: 1 +'em', marginTop: 2 +'em'}}>
                                Buy tickets
                                <i className="right chevron icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
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
                {/* <img src="../static/images/Movies.jpg" /> */}
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
