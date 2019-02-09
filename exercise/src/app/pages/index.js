import App from "../components/App"
import Head from 'next/head'
import React from 'react'
import { Button } from 'semantic-ui-react'

export default ({ pathname }) =>
    <App>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
            <link rel="stylesheet" type="text/css" href="../static/styles/welcome.css" />
        </Head>
        <img src="../static/images/Cinemalogo.png" />
        <div className="welcomeBTN">
            <Button color='yellow' onClick={() => window.location.href="/mainpage"}>
                <a className={pathname === "/mainpage" && "is-active"}> 
                    Choose your movie
                </a>
            </Button>
        </div>    
    </App>