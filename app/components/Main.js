/**
 * Created by carlos on 2016-06-23.
 */

import React from 'react';

const Main = () => ({
    render() {
        return(
            <div className='main-container'>
            { this.props.children }
            </div>
        )
    }
});

module.exports = Main;