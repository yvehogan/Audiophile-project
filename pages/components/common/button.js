/* eslint-disable react/button-has-type */
import React from 'react';

import PropTypes from 'prop-types';

function Button({
    children, className, type,
    onClick, border,
    disabled, fontSize,
    bgColor, textColor,
    paddingY, paddingX
}) {
    return (
        <button
            type={type}
            className={`${fontSize} ${bgColor} ${textColor} ${paddingX
                } ${paddingY} ${border ? 'border border-black' : ''
                } flex justify-center items-center transition ease-in-out hover:bg-opacity-70 disabled:border-0 ${className
                } disabled:cursor-default disabled:bg-opacity-30 disabled:bg-black disabled:text-white`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    fontSize: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    paddingY: PropTypes.string,
    paddingX: PropTypes.string,
    border: PropTypes.bool,
    type: PropTypes.string
};

Button.defaultProps = {
    children: 'Button',
    className: '',
    onClick: () => { },
    disabled: false,
    fontSize: 'text-base',
    bgColor: 'bg-primary',
    textColor: 'text-secondary',
    paddingY: 'py-3',
    paddingX: 'px-6',
    border: false,
    type: 'button'
};

export default Button;
