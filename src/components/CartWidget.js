import React from 'react';

const CartWidget = () => {
    const cartStyle = {
        position: 'relative',
        cursor: 'pointer',
        fontSize: '24px',
    };

    const notificationStyle = {
        position: 'absolute',
        top: '-10px',
        right: '-10px',
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '50%',
        padding: '4px 8px',
        fontSize: '12px',
    };

    return (
        <div style={cartStyle}>
            🛒
            <span style={notificationStyle}>3</span>
        </div>
    );
};

export default CartWidget;
