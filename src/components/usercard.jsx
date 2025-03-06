// usercard.jsx
import React from 'react';
import profilePhoto from '../../public/img/profile.png';


const Usercard = () => {
  // Static user details
  const name = "Sandanam";
  const mail = "santhanamk9604@example.com";
  const phoneNumber = "8122819604";
  const address = "Banglore";

  return (
    <div style={styles.card}>
      <img src={profilePhoto} alt="Profile" style={styles.profilePhoto} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.detail}><strong>Email:</strong> {mail}</p>
      <p style={styles.detail}><strong>Phone:</strong> {phoneNumber}</p>
      <p style={styles.detail}><strong>Address:</strong> {address}</p>
    </div>
  );
};

// Styles for the component
const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '300px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  profilePhoto: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '15px',
  },
  name: {
    fontSize: '24px',
    margin: '10px 0',
    color: '#333',
  },
  detail: {
    fontSize: '16px',
    margin: '8px 0',
    color: '#666',
  },
};

export default Usercard;