import React, { useEffect, useCallback, useState } from 'react';
import { IoIosMore } from 'react-icons/io';

function ThreeDotMenu() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu((showMenu) => !showMenu);
  }

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        setShowMenu(false);
      }
    },
    [setShowMenu],
  );

  useEffect(() => {
    if (showMenu) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showMenu, handleKeyDown]);

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="text-xl text-gray-700 focus:outline-none"
      >
        <IoIosMore />
      </button>

      {/* Dropdown menu */}
      {showMenu && (
        <div className="absolute right-0 z-10 w-24 rounded-lg border border-gray-200 bg-white shadow-lg">
          <button
            onClick={() => {
              console.log('Edit clicked');
              setShowMenu(false);
            }}
            className="block w-full px-4 py-1 text-left text-gray-700 hover:bg-gray-100"
          >
            Edit
          </button>
          <button
            onClick={() => {
              console.log('Delete clicked');
              setShowMenu(false);
            }}
            className="block w-full px-4 py-2 text-left text-red-500 hover:bg-red-100"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default ThreeDotMenu;
