import React, { useState } from 'react';
import withHoverHOC from './withHoverHOC';

function MouseHoverComponent(props) {
  const {textColor, textHover, onMouseOver, onMouseLeave} = props;
    return (
        <div>
            <h2 onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} onClick={() => props.onMouseClick('red')} style={{color:textColor}}>Mouse {textHover ? 'Over' : 'Out'}</h2>
        </div>

    )
}

export default withHoverHOC(MouseHoverComponent);