import React, { useState } from 'react';
import withHover from './withHover';

function HoverMouse(props) {
  const {color, hover, onMouseOver, onMouseLeave} = props;
    return (
        <div>
            <h2 onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} onClick={() => props.onMouseClick('red')} style={{color:color}}>Mouse {hover ? 'Over' : 'Out'}</h2>
        </div>

    )
}

export default withHover(HoverMouse);