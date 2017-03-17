const INCREMENT_HERO_SCORE = 'INCREMENT_HERO_SCORE';
const INCREMENT_VILLAIN_SCORE = 'INCREMENT_VILLAIN_SCORE';

const initialState = { heroes: 0, villains: 0 };

export default function reducer(state = initialState, action = {}){
    switch(action.type){
        case INCREMENT_HERO_SCORE:
            return { heroes: state.heroes + 1, villains: state.villains };
        case INCREMENT_VILLAIN_SCORE:
            return { heroes: state.heroes, villains: state.villains + 1 };
        default:
            return state;
    }
};

export const incrementHeroScore = () => ({
    type: INCREMENT_HERO_SCORE
});

export const incrementVillainScore = () => ({
    type: INCREMENT_VILLAIN_SCORE
});
