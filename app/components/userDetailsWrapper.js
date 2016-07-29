/**
 * Created by carlos on 2016-07-07.
 */
import React from 'react';
const PropTypes = React.PropTypes;

const UserDetailsWrapper = (props) => {
    return (
        <div className="col-sm-6">
            <p className="lead">{props.header}</p>
            {props.children}
        </div>

    )
}

UserDetailsWrapper.propType = {
    header: PropTypes.string.isRequired,
}

module.exports = UserDetailsWrapper;