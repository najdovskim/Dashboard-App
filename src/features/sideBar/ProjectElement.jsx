import { useNavigate } from 'react-router-dom';
import ThreeDotMenu from '../../ui/ThreeDotMenu';
import { colors } from '../../utils/colors';
import { MenuProvider } from '../../ui/MenuProvider';
import { ProjectContext } from '../../ui/AppLayout';
import { useContext } from 'react';

function ProjectElement({ project, onClick, isSelected }) {
  const { projectName, id } = project;
  const { setProjectNameContext } = useContext(ProjectContext);

  const navigate = useNavigate();

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    <MenuProvider>
      <li
        className={`flex cursor-pointer list-none items-center gap-1.5 px-1.5 py-0.5 md:px-2.5 md:py-1.5 ${
          isSelected
            ? 'rounded-md bg-slate-300 text-slate-800'
            : 'hover:rounded-md hover:bg-slate-200'
        }`}
        onClick={() => {
          onClick(id);
          navigate('/');
          setProjectNameContext(projectName);
        }}
      >
        <div className={`mr-1.5 h-2 w-2 rounded-full ${randomColor}`}></div>
        <h2 className="text-base text-slate-800">{projectName}</h2>
        <span className="ml-auto mt-1">
          <ThreeDotMenu type="project" id={id} />
        </span>
      </li>
    </MenuProvider>
  );
}

export default ProjectElement;
