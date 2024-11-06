import Filters from '../ui/Filters';
import Button from '../ui/Button';
import ToDoGrid from '../features/toDo/ToDoGrid';
import { useToDoList } from '../features/toDo/useToDoList';
import { useContext } from 'react';
import { ProjectContext } from '../ui/AppLayout';

function Dashboard() {
  const { isLoading, toDos, error } = useToDoList();
  const { idContext, projectNameContext } = useContext(ProjectContext);

  const toDoItems = toDos?.filter(
    (todo) =>
      todo.onProgress === false &&
      todo.priority !== 'Completed' &&
      todo.projectId === idContext,
  );
  const inProgressItems = toDos?.filter(
    (todo) => todo.onProgress === true && todo.projectId === idContext,
  );
  const doneItems = toDos?.filter(
    (todo) => todo.priority === 'Completed' && todo.projectId === idContext,
  );

  return (
    <div>
      <div>
        <h1 className="pb-7 text-3xl font-bold">
          {projectNameContext ? projectNameContext : 'Project'}
        </h1>
        <div className="flex items-center justify-between">
          <Filters />
          <div className="mr-5 flex">
            <Button type="primary">Share</Button>
            {/* <TypeOfView /> */}
          </div>
        </div>
      </div>

      <div className="my-6 grid grid-cols-[1fr_1fr_1fr] items-start justify-between gap-6 px-5 py-4">
        <ToDoGrid toDos={toDoItems} isLoading={isLoading} type="ToDo">
          To Do
        </ToDoGrid>
        <ToDoGrid
          toDos={inProgressItems}
          isLoading={isLoading}
          type="onProgress"
        >
          On Progress
        </ToDoGrid>
        <ToDoGrid toDos={doneItems} isLoading={isLoading} type="Done">
          Done
        </ToDoGrid>
      </div>
    </div>
  );
}

export default Dashboard;
