import React from 'react';
import Character from './Character';

const listStyle = {
    float: 'left',
    margin: '10px'
}

export default function CharacterList({characters}){
    return (
        <div style={listStyle}>
            {characters.map(c => <Character character={c} key={c.name} />)}
        </div>
    );
};
