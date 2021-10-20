import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
    return(
        <div>
        {
        robots.map((user, i) => {
        return (
        <Card 
        key={i} //key prop should have something that doesnt change.So a better key in this case would be something unique like id.
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email}
        />
        );
    })
        }
        </div>
    );
}

export default CardList;