import React from 'react';
import { User } from '../types';
import styles from './UserDetailModal.module.css';

interface UserDetailModalProps {
  user: User;
  onClose: () => void;
}

const UserDetailModal: React.FC<UserDetailModalProps> = ({ user, onClose }) => {
  const mapUrl = `https://www.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}`;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        
        <h2>{user.name}</h2>
        <div className={styles.section}>
          <h3>Contact Information</h3>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
        </div>

        <div className={styles.section}>
          <h3>Address</h3>
          <p>{user.address.street}</p>
          <p>{user.address.suite}</p>
          <p>{user.address.city}, {user.address.zipcode}</p>
          <a 
            href={mapUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.mapLink}
          >
            View on Map
          </a>
        </div>

        <div className={styles.section}>
          <h3>Company</h3>
          <p><strong>Name:</strong> {user.company.name}</p>
          <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
          <p><strong>Business:</strong> {user.company.bs}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetailModal; 
