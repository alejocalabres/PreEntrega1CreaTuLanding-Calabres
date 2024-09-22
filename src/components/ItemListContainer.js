import React from 'react';

const products = [
    { id: 1, name: 'Mancuernas Ajustables', price: 120, description: 'Perfectas para entrenamientos de fuerza en casa con pesos ajustables.' },
    { id: 2, name: 'Banda de Resistencia', price: 20, description: 'Versátiles y resistentes, ideales para ejercicios de rehabilitación y tonificación.' },
    { id: 3, name: 'Barra Olímpica', price: 220, description: 'Barra de 20 kg de alta resistencia para levantamiento de peso olímpico.' },
    { id: 4, name: 'Bicicleta Estática', price: 350, description: 'Mejora tu resistencia cardiovascular con esta bici de alta calidad.' },
    { id: 5, name: 'Colchoneta para Yoga', price: 30, description: 'Antideslizante y cómoda, perfecta para sesiones de yoga o pilates.' },
    { id: 6, name: 'Kettlebell 16kg', price: 80, description: 'Excelente para entrenamientos funcionales, ideal para fortalecer todo el cuerpo.' },
    { id: 7, name: 'Rodillo Abdominal', price: 25, description: 'Tonifica tu abdomen y mejora tu estabilidad con este rodillo.' },
    { id: 8, name: 'Banco de Pesas Ajustable', price: 150, description: 'Soporte robusto y ajustable para entrenamientos con pesas.' },
    { id: 9, name: 'Cuerda para Saltar', price: 15, description: 'Excelente para ejercicios de cardio y coordinación.' }
];

const ItemListContainer = ({ greeting }) => {
    const containerStyle = {
        backgroundColor: '#000',
        color: '#fff',
        padding: '40px 20px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
    };

    const headerStyle = {
        backgroundColor: '#333',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '40px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
    };

    const productStyle = {
        padding: '20px',
        border: '1px solid #fff',
        borderRadius: '8px',
        transition: 'transform 0.3s, box-shadow 0.3s',
        backgroundColor: '#1a1a1a',
        textAlign: 'left',
    };

    const productDescriptionStyle = {
        fontWeight: 'normal',
        fontSize: '14px',
        marginTop: '10px',
    };

    return (
        <div style={containerStyle}>
            <header style={headerStyle}>
                <h1>{greeting}</h1>
                <p>¡Bienvenido a nuestra tienda de gimnasio! Encuentra el equipo ideal para mejorar tu entrenamiento.</p>
            </header>
            <div style={gridStyle}>
                {products.map(product => (
                    <div
                        key={product.id}
                        style={productStyle}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0px 4px 12px rgba(255, 255, 255, 0.2)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <h3>{product.name}</h3>
                        <p style={productDescriptionStyle}>{product.description}</p>
                        <p>Precio: ${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;
