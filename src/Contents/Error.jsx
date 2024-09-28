import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for routing

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.text}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={styles.link}>Go Back to Home</Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8f8f8',
  },
  heading: {
    fontSize: '6rem',
    margin: '0',
    color: '#ff6f61',
  },
  text: {
    fontSize: '1.5rem',
    margin: '20px 0',
    color: '#333',
  },
  link: {
    fontSize: '1.2rem',
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default NotFoundPage;
