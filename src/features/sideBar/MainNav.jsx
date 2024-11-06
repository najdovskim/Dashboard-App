import { BsChatDots } from 'react-icons/bs';
import { GoTasklist } from 'react-icons/go';
import { HiOutlineHome, HiOutlineUsers } from 'react-icons/hi2';
import { IoSettingsOutline } from 'react-icons/io5';

import MainNavElement from '../../ui/MainNavElement';
import { NavLink } from 'react-router-dom';

function MainNav({ toggleBar }) {
  if (toggleBar) {
    return (
      <nav>
        <ul className="flex flex-col items-center gap-4 text-gray-500">
          <NavLink to="/">
            <HiOutlineHome size={26} />
          </NavLink>
          <NavLink to="/messages">
            <BsChatDots size={25} />
          </NavLink>

          <NavLink to="/members">
            <HiOutlineUsers size={25} />
          </NavLink>

          <NavLink to="/tasks">
            <GoTasklist size={25} />
          </NavLink>

          <NavLink to="/settings">
            <IoSettingsOutline size={25} />
          </NavLink>
        </ul>
      </nav>
    );
  }

  return (
    <nav>
      <ul className="flex flex-col items-start gap-3">
        <MainNavElement name="Home" to="/">
          <HiOutlineHome size={26} />
        </MainNavElement>
        <MainNavElement name="Message" to="/messages">
          <BsChatDots size={25} />
        </MainNavElement>

        <MainNavElement name="Members" to="/members">
          <HiOutlineUsers size={25} />
        </MainNavElement>

        <MainNavElement name="Tasks" to="/tasks">
          <GoTasklist size={25} />
        </MainNavElement>

        <MainNavElement name="Settings" to="/settings">
          <IoSettingsOutline size={25} />
        </MainNavElement>
      </ul>
    </nav>
  );
}

export default MainNav;
