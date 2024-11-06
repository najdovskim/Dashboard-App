import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from '../features/sideBar/Sidebar';
import { createContext, useState } from 'react';

export const ProjectContext = createContext();

function AppLayout() {
  const [toggleBar, setToggleBar] = useState(false);
  const [projectNameContext, setProjectNameContext] = useState('');
  const [idContext, setIdContext] = useState(null);

  function handleToggle() {
    setToggleBar((prev) => !prev); // Toggle between true and false
    console.log(!toggleBar); // Log the updated state
  }

  if (toggleBar) {
    return (
      <ProjectContext.Provider
        value={{
          projectNameContext,
          setProjectNameContext,
          idContext,
          setIdContext,
        }}
      >
        <div className="grid h-screen grid-cols-[6rem_1fr] grid-rows-[auto_1fr]">
          <Sidebar toggleBar={toggleBar} onToggleBar={handleToggle} />
          <Header />
          <main className="p-[4rem_3.8rem_6.4rem]">
            <Outlet />
          </main>
        </div>
      </ProjectContext.Provider>
    );
  }
  return (
    <ProjectContext.Provider
      value={{
        projectNameContext,
        setProjectNameContext,
        idContext,
        setIdContext,
      }}
    >
      <div className="grid h-screen grid-cols-[15rem_1fr] grid-rows-[auto_1fr]">
        <Sidebar toggleBar={toggleBar} onToggleBar={handleToggle} />
        <Header />
        <main className="p-[4rem_3.8rem_6.4rem]">
          <Outlet />
        </main>
      </div>
    </ProjectContext.Provider>
  );
}

export default AppLayout;
