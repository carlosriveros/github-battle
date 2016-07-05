/**
 * Created by carlos on 2016-06-23.
 */

import React from 'react';
import {transparentBg} from '../styles'
import {Link} from 'react-router'

const Home = () => ({
    render() {
        return(
            <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
                <h1>Github battle</h1>
                <p className="lead"> some fancy motto</p>
                <Link to="/playerOne">
                <button type="button" className="btn btn-lg btn-success">Get Started</button>
                </Link>
            </div>
        )
    }
})

module.exports = Home;