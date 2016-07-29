/**
 * Created by carlos on 2016-07-07.
 */
import React from 'react';
import Results from '../components/Results'
import githubHelpers from '../utils/githubhelpers'



const ResultContainer = React.createClass( {

    getInitialState() {
      return {
          isLoading: true,
          scores: []
      }
    },
    componentDidMount() {
        githubHelpers.battle(this.props.location.state.playersInfo)
            .then(function(scores) {
                this.setState({
                    scores: scores,
                    isLoading: false
                })
            }.bind(this))
    },
    render() {
        return (
            <Results isLoading={this.state.isLoading}
                     playersInfo={this.props.location.state.playersInfo}
                     scores={this.state.scores}/>
        )
    }


});

module.exports = ResultContainer;