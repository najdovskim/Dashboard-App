import { IoIosMore } from 'react-icons/io';
import { useMenu } from '../hooks/useMenu';
import useDeleteProject from '../features/sideBar/useDeleteProject';
import useDeleteTask from '../features/toDo/useDeleteTask';

function ThreeDotMenu({ id, type }) {
  const { openMenuId, setOpenMenuId } = useMenu();
  const { isDeleting: isDeletingProject, deleteProject } = useDeleteProject();
  const { isDeleting: isDeletingTask, deleteTask } = useDeleteTask();

  const handleToggle = (e) => {
    e.stopPropagation();

    openMenuId === '' || openMenuId !== id
      ? setOpenMenuId(id)
      : setOpenMenuId('');
  };

  const handleMenuClick = (e) => {
    e.stopPropagation();
  };

  const handleDelete = (e) => {
    if (type === 'project') {
      deleteProject(id);
    } else if (type === 'element') {
      deleteTask(id);
    }
    setOpenMenuId(null);
  };

  return (
    <div className="menu-container relative" onClick={handleMenuClick}>
      <button
        onClick={handleToggle}
        className="text-xl text-gray-700 focus:outline-none"
        aria-label="Toggle menu"
      >
        <IoIosMore />
      </button>

      {openMenuId === id && (
        <div className="absolute right-0 z-50 w-24 rounded-lg border border-gray-200 bg-white shadow-lg">
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log('Edit clicked');
              setOpenMenuId(null);
            }}
            className="block w-full px-4 py-1 text-left text-gray-700 hover:bg-gray-100"
          >
            Edit
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(id);
              setOpenMenuId(null);
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

// function ThreeDotMenu({ id }) {
//   const { openMenuId, setOpenMenuId, close, open } = useMenu();

//   const toggleMenu = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     openMenuId === '' || openMenuId !== id ? open(id) : close();
//   };

//   const handleMenuItemClick = (action) => (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log(`${action} clicked`);
//     setOpenMenuId('');
//   };

//   return (
//     <div
//       className="menu-container relative"
//       onClick={(e) => e.stopPropagation()}
//     >
//       <button
//         onClick={toggleMenu}
//         className="text-xl text-gray-700 focus:outline-none"
//         aria-label="Toggle menu"
//       >
//         <IoIosMore />
//       </button>

//       {open && (
//         <div
//           className="absolute right-0 z-50 w-24 rounded-lg border border-gray-200 bg-white shadow-lg"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <button
//             onClick={handleMenuItemClick('Edit')}
//             className="block w-full px-4 py-1 text-left text-gray-700 hover:bg-gray-100"
//           >
//             Edit
//           </button>
//           <button
//             onClick={handleMenuItemClick('Delete')}
//             className="block w-full px-4 py-2 text-left text-red-500 hover:bg-red-100"
//           >
//             Delete
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ThreeDotMenu;
