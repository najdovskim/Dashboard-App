import { useState } from 'react';
import Logo from '../../ui/Logo';
import MainNav from './MainNav';
import ProjectList from './ProjectNav';
import ProjectNav from './ProjectNav';

function Sidebar({ toggleBar, onToggleBar }) {
  if (toggleBar) {
    return (
      <aside className="row-span-full flex flex-col gap-[1.6rem] border-r border-slate-200 bg-white p-[0.6rem_1.6rem]">
        <Logo toggleBar={toggleBar} onToggleBar={onToggleBar} />

        <MainNav toggleBar={toggleBar} />
        <ProjectList toggleBar={toggleBar} />
      </aside>
    );
  }
  return (
    <aside className="row-span-full flex flex-col gap-[1.6rem] border-r border-slate-200 bg-white p-[0.6rem_1.6rem]">
      <Logo toggleBar={toggleBar} onToggleBar={onToggleBar} />

      <MainNav toggleBar={toggleBar} />
      <ProjectNav toggleBar={toggleBar} />
    </aside>
  );
}

export default Sidebar;
