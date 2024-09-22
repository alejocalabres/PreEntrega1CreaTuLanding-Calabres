import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    const navStyle = {
        backgroundColor: '#333',
        color: '#fff',
        padding: '15px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
    };

    const categoriesStyle = {
        display: 'flex',
        gap: '15px',
        listStyle: 'none',
    };

    const logoStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
    };

    return (
        <nav style={navStyle}>
            <div style={logoStyle}>GymShop</div>
            <ul style={categoriesStyle}>
                <li>Pesas</li>
                <li>Cardio</li>
                <li>Accesorios</li>
                <li>Ropa</li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
