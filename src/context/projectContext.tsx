import { useState, createContext, ReactNode } from 'react';
import projects from '../data/projects';

export type Project = {
  name: string;
  description: string;
  demoLink: string;
  gitLink: string;
  image: string;
  skills: string[];
}

type ProjectContextProps = {
  projects: Project[];
  selectedSkills: string[];
  setSelectedSkills: React.Dispatch<React.SetStateAction<never[]>>;
}
export const ProjectContext = createContext<ProjectContextProps | null>(null);

export function ProjectContextProvider({ children }: { children: ReactNode }) {

  const [selectedSkills, setSelectedSkills] = useState([]);

  return (
    <ProjectContext.Provider value={{projects, selectedSkills, setSelectedSkills}}>
      {children}
    </ProjectContext.Provider>
  );
}

