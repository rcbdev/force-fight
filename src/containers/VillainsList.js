import {connect} from 'react-redux';
import {CharacterList} from '../components';

const VillainsList = connect(
    (state) => ({characters: state.villains}),
    {}
)(CharacterList);

export default VillainsList;
