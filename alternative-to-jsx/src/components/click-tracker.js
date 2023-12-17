import React, {useState} from 'react';

function ClickTracker() {
    const [clicked, setClicked] = useState(0);
    
    const handleClick = (e) => {
        e.preventDefault();
        setClicked((old) => clicked + 1);
    }
    
    return React.createElement('div', {
        className: 'test',
    },[
        React.createElement('p', null, [
        `Hi friend, it was clicked ${clicked} times`, 
        React.createElement('br'),
        React.createElement('br'), 
        React.createElement('button', {onClick: handleClick}, 'Clique aqui')])
    ])
}


export default ClickTracker;