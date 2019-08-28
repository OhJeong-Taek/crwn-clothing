import React from 'react';

import './custom-button.styles.scss'

const CustomButton = ({children, ...ohterProps}) => (
    <button className='custom-button' {...ohterProps}>
        {children}
    </button>
)

export default CustomButton;