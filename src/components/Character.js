import React from 'react';

export default function Character({character}){
    return (
        <div>{character.name} ({character.strength})</div>
    );
};
