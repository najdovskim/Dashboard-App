import { useState } from 'react';
import { HiArchiveBox } from 'react-icons/hi2';
import { MdOutlineAddBox } from 'react-icons/md';
import ProjectHeader from './ProjectHeader';
import ProjectList from './ProjectList';

function ProjectNav({ toggleBar }) {
  const [projectsOpen, setProjectsOpen] = useState(true);

  function handleSetProject() {
    setProjectsOpen((show) => !show);
  }

  if (toggleBar) {
    return (
      <div className="items-center border-t border-slate-700 px-1 pt-1 text-center">
        <div className="mt-6 flex items-center gap-3 border-b-2 pb-2 text-gray-600">
          <HiArchiveBox className="mx-auto" size={25} />
        </div>

        {projectsOpen && (
          <div className="= my-2 items-center space-y-3 text-sm font-semibold text-slate-700">
            <div className="px-1.5 py-0.5 hover:rounded-md hover:bg-slate-300 md:px-2.5 md:py-1.5">
              <div className="mx-auto h-3 w-3 rounded-full bg-orange-400"></div>
            </div>
            <div className="px-1.5 py-0.5 hover:rounded-md hover:bg-slate-300 md:px-2.5 md:py-1.5">
              <div className="mx-auto h-3 w-3 rounded-full bg-blue-400"></div>
            </div>
            <div className="px-1.5 py-0.5 hover:rounded-md hover:bg-slate-300 md:px-2.5 md:py-1.5">
              <div className="mx-auto h-3 w-3 rounded-full bg-green-400"></div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="border-t border-slate-700 pt-1">
      <ProjectHeader />

      <ProjectList />
    </div>
  );
}

export default ProjectNav;
