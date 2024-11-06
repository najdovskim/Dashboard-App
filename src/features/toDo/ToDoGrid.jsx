import { useContext } from 'react';
import ToDoElement from './ToDoElement';
import { ProjectContext } from '../../ui/AppLayout';

function ToDoGrid({ type, children, toDos, isLoading }) {
  const { projectNameContext, idContext } = useContext(ProjectContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const filterCondition = (todo) => {
    switch (type) {
      case 'Done':
        return idContext === todo.projectId && todo.priority === 'Completed';
      case 'onProgress':
        return idContext === todo.projectId && todo.onProgress === true;
      case 'ToDo':
        return (
          idContext === todo.projectId &&
          todo.onProgress === false &&
          todo.priority !== 'Completed'
        );
      default:
        return false;
    }
  };

  const borderColor = {
    Done: 'border-green-400',
    onProgress: 'border-orange-400',
    ToDo: 'border-blue-700',
  };

  const statusColor = {
    Done: 'bg-green-400',
    onProgress: 'bg-orange-400',
    ToDo: 'bg-blue-700',
  };

  const count = toDos.length;

  return (
    toDos && (
      <div className="rounded-xl bg-gray-100 px-6 py-4">
        <span
          className={`flex items-center justify-between border-b-4 ${borderColor[type]}`}
        >
          <div
            className={`mr-1.5 h-2 w-2 rounded-full ${statusColor[type]}`}
          ></div>
          <h3 className="my-2.5 text-base font-semibold">{children}</h3>
          <span className="mx-3 mr-auto rounded-full bg-gray-200 px-1.5 py-0 text-sm text-gray-700">
            {count}
          </span>
        </span>
        <div>
          {toDos.filter(filterCondition).map((todo) => (
            <ToDoElement todo={todo} key={todo.id} />
          ))}
        </div>
      </div>
    )
  );
}

export default ToDoGrid;
