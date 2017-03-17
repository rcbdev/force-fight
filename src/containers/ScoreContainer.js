import {connect} from 'react-redux';
import {Score} from '../components';
import {incrementHeroScore, incrementVillainScore} from '../redux/modules/score';

const ScoreContainer = connect(
    (state) => ({score: state.score}),
    {incrementHeroScore, incrementVillainScore}
)(Score);

export default ScoreContainer;
