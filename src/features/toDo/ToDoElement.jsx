import { useContext } from 'react';
import { MenuProvider } from '../../ui/MenuProvider';
import Span from '../../ui/Span';
import ThreeDotMenu from '../../ui/ThreeDotMenu';
import { ProjectContext } from '../../ui/AppLayout';

function ToDoElement({ todo }) {
  const { id, priority, title, description, image } = todo;
  const { projectNameContext, setProjectNameContext, idContext, setIdContext } =
    useContext(ProjectContext);

  return (
    <MenuProvider>
      <div className="my-6 rounded-xl bg-white px-5 py-4">
        <div className="flex items-center justify-between">
          <Span>{priority}</Span>
          <ThreeDotMenu id={id} className="my-auto" />
        </div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-base text-gray-500">{description}</p>
      </div>
    </MenuProvider>
  );
}

export default ToDoElement;
