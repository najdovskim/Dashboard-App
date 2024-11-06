import { IoIosMore } from 'react-icons/io';
import Span from '../../ui/Span';

function ToDoMenu() {
  return (
    <div className="space-y- rounded-lg bg-gray-100 px-6 py-4">
      <span className="flex items-center justify-between border-b-4 border-blue-700">
        <h3 className="my-2.5 text-base">To Do</h3>
        <span className="mx-3 mr-auto rounded-full bg-gray-200 px-2 text-gray-600">
          4
        </span>
        <img src="images/add-square.png" alt="+" />
      </span>
      {/* ----------  -------- */}
      <div className="my-6 rounded-xl bg-white px-5 py-4">
        <div className="flex items-center justify-between">
          <Span>low</Span>
          <IoIosMore size={22} />
        </div>
        <h2 className="text-lg font-semibold">Brainstorming</h2>
        <p className="text-base text-gray-500">
          Brainstorming brings team members' diverse experience into play.
        </p>
      </div>
    </div>
  );
}

export default ToDoMenu;
