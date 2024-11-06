import { MdOutlineAddBox } from 'react-icons/md';

function ProjectHeader() {
  return (
    <div className="mt-6 flex gap-3">
      <h3 className="text-base font-semibold text-slate-500">MY PROJECTS</h3>
      <button>
        <MdOutlineAddBox size={20} className="text-slate-600" />
      </button>
    </div>
  );
}

export default ProjectHeader;
