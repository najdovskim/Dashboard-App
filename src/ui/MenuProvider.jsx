import { createContext, useEffect, useState } from 'react';

export const MenuContext = createContext({
  openMenuId: '',
  setOpenMenuId: () => {},
});

export const MenuProvider = ({ children }) => {
  const [openMenuId, setOpenMenuId] = useState('');

  const close = () => openMenuId('');
  const open = openMenuId;

  // Handle clicking outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Change condition to check for non-empty string
      if (openMenuId !== '' && !event.target.closest('.menu-container')) {
        setOpenMenuId('');
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [openMenuId]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setOpenMenuId('');
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <MenuContext.Provider value={{ openMenuId, setOpenMenuId, close, open }}>
      {children}
    </MenuContext.Provider>
  );
};
