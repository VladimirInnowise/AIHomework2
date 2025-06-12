import React from 'react';
import { User } from '../types';
import styles from './UserList.module.css';

interface UserListProps {
  users: User[];
  onUserClick: (user: User) => void;
  onDeleteUser: (userId: number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onUserClick, onDeleteUser }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.company.name}</td>
              <td>
                <button 
                  className={styles.viewButton}
                  onClick={() => onUserClick(user)}
                >
                  View Details
                </button>
                <button 
                  className={styles.deleteButton}
                  onClick={() => onDeleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList; 
