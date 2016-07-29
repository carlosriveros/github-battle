/**
 * Created by carlos on 2016-07-05.
 */
import React from 'react';
import styles from '../styles'
import {Link} from  'react-router'
import UserDetails from '../components/userDetails'
import UserDetailsWrapper from '../components/UserDetailsWrapper'
import MainContainer from '../components/MainContainer'
const PropTypes = React.PropTypes;

const ConfirmBattle = (props) => {

    return props.isLoading === true
        ? <p> Loading! </p>
        : <MainContainer>
                <h1>Confirm Players</h1>
                <div className='col-sm-8 col-sm-offset-2'>
                    <UserDetailsWrapper header='Player 1'>
                        <UserDetails info={props.playersInfo[0]} />
                    </UserDetailsWrapper>
                    <UserDetailsWrapper header='Player 2'>
                        <UserDetails info={props.playersInfo[1]} />
                    </UserDetailsWrapper>
                </div>
                <div className='col-sm-8 col-sm-offset-2'>
                    <div className='col-sm-12' style={styles.space}>
                        <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate Battle!</button>
                    </div>
                    <div className='col-sm-12' style={styles.space}>
                        <Link to='/playerOne'>
                            <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
                        </Link>
                    </div>
                </div>
          </MainContainer>

}

ConfirmBattle.PropTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    onInitiateBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;