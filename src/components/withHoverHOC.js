import React, { useState } from 'react';

const withHoverHOC = (WrappedComponent) => {
    const WithHover = () => {
        const [textHover, setHover] = useState(false)
        const [textColor, setTextColor] = useState('#888')
        const onMouseOver = () => {
            setHover(true)
        }
        const onMouseLeave = () => {
            setHover(false)
        }
        const onMouseClick = (color) => {
            setTextColor(color);
        }
        return <WrappedComponent textColor={textColor} textHover={textHover} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} onMouseClick={onMouseClick}/>
    }

    return WithHover;
}

export default withHoverHOC;