/**
 * Created by juliomojica on 2/15/17.
 */
import React from 'react';
import Card from  './card';

export default function List(){
    const cardList=[];
    for(let i = 0; i < 3; i++){
        cardList.push(<Card />);
    }
    return (
        <div>
            {cardList}
        </div>
    )
};
