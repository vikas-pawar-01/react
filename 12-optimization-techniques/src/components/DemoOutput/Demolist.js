import React, { useMemo } from 'react';

const Demolist = (props) => {
    const { items } = props;

    const sortedList = useMemo(() => {
        console.log('Initial Sortted List');
        return items.sort((a, b) => a - b);
    }, [items]);

    console.log('Demolist RUNNING');

    return (
        <div>
            <h2>{props.title}</h2>
            <ul>
                {sortedList.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default React.memo(Demolist);