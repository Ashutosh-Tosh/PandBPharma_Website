import React from 'react';
import lab from '../.././assets/images/lab.webp';
const Home = () => {
    const styles = {
        backgroundImage: `url(${lab})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Set the minimum height to cover the viewport
        // Add more styling as needed
      };
    return (
        <div style={styles}>
            
        </div>
    );
};

export default Home;