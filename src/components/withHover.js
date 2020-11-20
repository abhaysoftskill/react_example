import React, { useState } from 'react';

const withHover = (WrappedComponent) => {
    const WithHover = () => {
        const [hover, setHover] = useState(false)
        const [textColor, setTextColor] = useState('#888')
        const onMouseOver = () => {
            setHover(true)
        }
        const onMouseLeave = () => {
            setHover(false)
        }
        const onMouseClick = (color) => {
            setTextColor(color);  console.log(color);
        }
        return <WrappedComponent color={textColor} hover={hover} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} onMouseClick={onMouseClick}/>
    }

    return WithHover
}

export default withHover;