/**
 * Created by carlos on 2016-07-07.
 */
import React from 'react';
import styles from '../styles'
import UserDetails from '../components/userDetails'
import UserDetailsWrapper from '../components/userDetailsWrapper'
import {Link} from 'react-router'
import MainContainer from '../components/MainContainer'
const PropTypes = React.PropTypes;



const  StartOver = () => {
    return (

        <div className="col-sm-12" style={styles.space}>
            <Link to="/playerOne">
                <button type="button" className="btn btn-lg btn-danger">Start Over</button>
            </Link>
        </div>
    )
}
const Results = (props) => {

    if(props.isLoading === true) {
        return (
            <p> Loading </p>
        )
    }

    if(props.scores[0] === props.scores[1]) {
        return(
            <MainContainer>
                <h1>It's a tie!</h1>
                <StartOver/>
           </MainContainer>

        )
    }

    var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
    var losingIndex = winningIndex === 0 ? 1 : 0;
    return (
       <MainContainer>
           <h1>Results</h1>
           <div className="col-sm-8 col-sm-offset-2">
               <UserDetailsWrapper header='Winner'>
                   <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]}/>
               </UserDetailsWrapper>
               <UserDetailsWrapper header='Loser'>
                   <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]}/>
               </UserDetailsWrapper>
           </div>
            <StartOver/>

       </MainContainer>
    )
}

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
}


module.exports = Results;