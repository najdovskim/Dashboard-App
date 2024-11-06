import { useContext, useState } from 'react';
import ProjectElement from './ProjectElement';
import { useProjects } from './useProjects';
import { MenuProvider } from '../../ui/MenuProvider';
import { ProjectContext } from '../../ui/AppLayout';

function ProjectList() {
  const { projects, isLoading, error } = useProjects();
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const { setIdContext } = useContext(ProjectContext);

  const handleSelectProject = (id) => {
    setSelectedProjectId(id);
    setIdContext(id);
  };

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="my-2 space-y-1 text-sm font-semibold text-slate-700">
      <MenuProvider>
        {projects.map((project) => (
          <ProjectElement
            isSelected={selectedProjectId === project.id}
            onClick={handleSelectProject}
            project={project}
            key={project.id}
          ></ProjectElement>
        ))}
      </MenuProvider>
    </div>
  );
}

export default ProjectList;
