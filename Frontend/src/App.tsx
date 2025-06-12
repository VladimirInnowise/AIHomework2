import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import UserDetailModal from './components/UserDetailModal';
import { User } from './types';
import './App.css';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
    }
  };

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  const handleDeleteUser = (userId: number) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>User Management</h1>
      </header>
      <main className="app-main">
        <UserList 
          users={users} 
          onUserClick={handleUserClick} 
          onDeleteUser={handleDeleteUser} 
        />
        {selectedUser && (
          <UserDetailModal 
            user={selectedUser} 
            onClose={handleCloseModal} 
          />
        )}
      </main>
    </div>
  );
};

export default App; 
