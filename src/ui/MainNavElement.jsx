import { NavLink } from 'react-router-dom';

function MainNavElement({ children, name, to }) {
  if (to === '/')
    return (
      <li className="flex">
        <NavLink
          className="flex flex-row items-center gap-2.5 font-medium text-gray-500"
          to={to}
        >
          {children}
          <span className="text-xl">{name}</span>
        </NavLink>
      </li>
    );
  return (
    <li className="flex">
      <NavLink
        className="flex flex-row items-center gap-2.5 font-medium text-gray-500"
        to={to}
      >
        {children}
        <span className="text-xl">{name}</span>
      </NavLink>
    </li>
  );
}

export default MainNavElement;
