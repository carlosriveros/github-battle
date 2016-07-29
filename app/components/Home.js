/**
 * Created by carlos on 2016-06-23.
 */

import React from 'react';
import {Link} from 'react-router'
import MainContainer from '../components/MainContainer'

const Home = () => ({
    render() {
        return(
            <MainContainer>
                <h1>Github battle</h1>
                <p className="lead"> Be the Github champion!</p>
                <Link to="/playerOne">
                <button type="button" className="btn btn-lg btn-success">Get Started</button>
                </Link>
            </MainContainer>
        )
    }
})

module.exports = Home;