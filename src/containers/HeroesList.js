import {connect} from 'react-redux';
import {CharacterList} from '../components';

const HeroesList = connect(
    (state) => ({characters: state.heroes}),
    {}
)(CharacterList);

export default HeroesList;
