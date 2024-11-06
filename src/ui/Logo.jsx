import { useContext } from 'react';
import { ProjectContext } from './AppLayout';

function Logo({ onToggleBar, toggleBar }) {
  const { projectNameContext } = useContext(ProjectContext);

  if (toggleBar === false) {
    return (
      // <div className="grid grid-cols-2 items-center justify-around border-b border-slate-700">

      <div className="my-3 flex flex-row gap-2 border-b border-gray-400 py-3">
        <div>
          <img src="images/colorfilter.png" alt="icon" />
        </div>
        <h1 className="text-xl font-bold">
          {projectNameContext ? projectNameContext : 'Project'}
        </h1>

        <span className="ml-auto">
          <img
            onClick={onToggleBar}
            className="mr-auto mt-2 w-6 cursor-pointer"
            src="images/sidebarArrow.png"
            alt="&larr;"
          />
        </span>
      </div>
    );
  }
  return (
    <div>
      <div className="flex flex-row gap-2 border-b border-gray-400 py-3">
        <img
          onClick={onToggleBar}
          className="w-9 cursor-pointer"
          src="images/colorfilter.png"
          alt="icon"
        />
      </div>
    </div>
  );
}

export default Logo;
