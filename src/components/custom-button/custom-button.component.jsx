import React from 'react';

import './custom-button.styles.scss'

const CustomButton = ({children, isGoogleSignIn, inverted, ...ohterProps}) => (
    <button className={`${inverted? 'inverted': ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...ohterProps}>
        {children}
    </button>
);

export default CustomButton;