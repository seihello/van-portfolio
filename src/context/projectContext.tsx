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
  selectedSkills: Set<string>;
  setSelectedSkills: (selectedSkills: Set<string>) => void;
  isFiltered: boolean;
  setIsFiltered: (isFiltered: boolean) => void;
}
export const ProjectContext = createContext<ProjectContextProps>({} as ProjectContextProps);

export function ProjectContextProvider({ children }: { children: ReactNode }) {

  const [selectedSkills, setSelectedSkills] = useState<Set<string>>(new Set(["All"]));
  const [isFiltered, setIsFiltered] = useState(false);

  return (
    <ProjectContext.Provider value={{projects, selectedSkills, setSelectedSkills, isFiltered, setIsFiltered}}>
      {children}
    </ProjectContext.Provider>
  );
} 

