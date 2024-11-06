import { IoGridOutline } from 'react-icons/io5';
import { PiRowsLight } from 'react-icons/pi';

function TypeOfView() {
  return (
    <div className="flex flex-row items-center">
      <span className="rounded-md p-1">
        {/* <CiGrid2H size={26} /> */}
        <PiRowsLight size={26} />
        {/* <PiRowsFill size={26} /> */}
      </span>
      <span className="p-1">
        {/* <CiGrid41 size={26} /> */}
        <IoGridOutline size={20} />
        {/* <IoGrid size={26} /> */}
      </span>
    </div>
  );
}

export default TypeOfView;
