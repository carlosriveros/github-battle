/**
 * Created by carlos on 2016-07-05.
 */
import React from 'react';

const ConfirmBattle = (props) => {

    return props.isLoading === true
        ? <p> Loading! </p>
        : <p> CONFIRM BATTLE! </p>

}

module.exports = ConfirmBattle;