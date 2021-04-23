import React from 'react';
import './Grid.scss';


const Grid = (props) => {
    const gridClassName = `Grid Grid_${props.columns}`;

    return (
        <div className={gridClassName}>
            { props.children}
        </div>
    );
}

export default Grid;