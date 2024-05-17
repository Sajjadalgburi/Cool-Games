import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentModal, setCurrentModal] = useState(false);
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleOpenModal = (modalType) => {
    setFormState({ email: '', password: '', username: '' });
    setCurrentModal(modalType);
  };

  const handleCloseModal = () => {
    setCurrentModal(false);
    setFormState({
      username: '',
      email: '',
      password: '',
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <AuthContext.Provider
      value={{
        currentModal,
        formState,
        handleOpenModal,
        handleCloseModal,
        handleChange,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
