/**
 * Created by juliomojica on 2/15/17.
 */
import React from 'react';
import List from './list';

export default function Board(){
    const listContainer = [];
    for(let i = 0; i < 3; i++) {
        listContainer.push(<List />);
    }
        return (
            <div className="card">
                {listContainer}
            </div>
        )
};