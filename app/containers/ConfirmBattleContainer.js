/**
 * Created by carlos on 2016-07-05.
 */
import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';

const ConfirmBattleContainer = React.createClass({

    contextTypes : {
        router: React.PropTypes.object.isRequired
    },
    getInitialState() {
      return {
          isLoading: true,
          playerInfo: []
      }
    },
    componentDidMount() {
      const query = this.props.location.query;
    },
    render() {
        return(
            <ConfirmBattle
            isLoading={this.state.isLoading}
            playersInfo={this.state.playerInfo}
            />
        )
    }
});

module.exports = ConfirmBattleContainer;