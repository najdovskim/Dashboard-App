import { useNavigate } from 'react-router-dom';
import ThreeDotMenu from '../../ui/ThreeDotMenu';
import { colors } from '../../utils/colors';

function ProjectElement({ project, onClick, isSelected }) {
  const { projectName, id } = project;

  const navigate = useNavigate();

  // const randomColor = generateRandomColor();
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    <li
      className={`flex cursor-pointer list-none items-center gap-1.5 px-1.5 py-0.5 md:px-2.5 md:py-1.5 ${
        isSelected
          ? 'rounded-md bg-slate-300 text-slate-800'
          : 'hover:rounded-md hover:bg-slate-200'
      }`}
      onClick={() => {
        onClick(id); // First function call
        navigate('/'); // Second function call
      }}
    >
      <div className={`mr-1.5 h-2 w-2 rounded-full ${randomColor}`}></div>

      <h2 className="text-base text-slate-800">{projectName}</h2>
      <span className="ml-auto mt-1">
        <ThreeDotMenu id={id} />
      </span>
    </li>
  );
}

export default ProjectElement;
