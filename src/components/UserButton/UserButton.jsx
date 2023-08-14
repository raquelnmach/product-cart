import React, { useContext, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import './UserButton.css';
import getUserData from '../../services/UserService';
import AppContext from '../../context/AppContext';

function User() {

  const { user, setUser } = useContext(AppContext);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUserData.getUserData();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchUserData();
  }, []);

  return (    
    <>
      {user.active ? (
        <button type="button" className="user-button">
          <FaUser />
          <span className="hello-user">Olá, {user.name}</span>
        </button>
      ) : (
        <button type="button" className="user-button">
          <FaUser />
          <span className="hello-user">Faça Login ou Cadastre-se</span>
        </button>
      )}
    </>
  );
}

export default User;
