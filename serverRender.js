
import React from 'react';
import ReactDomServer from 'react-dom/server';

import App from './src/components/App';

import axios from "axios";
import config from "./config";

const serverRender = () => 
    axios.get(`${config.serverUrl}/api/contests`)
        .then(resp => {
            return {
                initialMarkup:  ReactDomServer.renderToString(
                    <App initialContests={resp.data.contests}/>
                ),
                initialData : resp.data
            }
        });


export default serverRender;
