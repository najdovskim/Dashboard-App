import { IoIosSearch } from 'react-icons/io';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-b-gray-400 bg-fuchsia-300 p-[1.2rem_4.8rem]">
      <div className="relative flex items-center">
        <input
          className="relative rounded-sm bg-gray-100 px-3.5 py-1 text-center text-sm text-gray-500"
          defaultValue="Search for anything..."
        />
        <IoIosSearch className="absolute left-1 top-1.5" />
      </div>
      <p>User</p>
    </header>
  );
}

export default Header;
