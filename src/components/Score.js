import React from 'react';

export default function Score({score, incrementHeroScore, incrementVillainScore}){
    return (
        <div>
            <button onClick={() => incrementHeroScore()}>+</button>
            {score.heroes} : {score.villains}
            <button onClick={() => incrementVillainScore()}>+</button>
        </div>
    )
};
